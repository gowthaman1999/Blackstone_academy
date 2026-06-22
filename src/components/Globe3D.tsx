"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export default function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    setLoading(false);
    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Colors based on theme
    const isDark = theme === "dark";
    const particleColor = isDark ? 0x00D2FF : 0x0066FF; // Cyan/Blue
    const arcColor = isDark ? 0x0066FF : 0x00D2FF;      // Blue/Cyan
    const coreColor = isDark ? 0x4F46E5 : 0x8B5CF6;     // Purple/Indigo

    // Group to hold all globe objects (helps with drag rotation)
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Core Glowing Sphere
    const sphereGeo = new THREE.SphereGeometry(76, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: coreColor,
      transparent: true,
      opacity: 0.05,
      wireframe: true,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(coreSphere);

    // 2. Dots/Particles on the globe
    const particleCount = 750;
    const pointsGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorObj = new THREE.Color(particleColor);

    const radius = 80;
    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution for uniform sphere scattering
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Add slight gradient variation to points
      const ratio = i / particleCount;
      colors[i * 3] = colorObj.r + (ratio * 0.2 - 0.1);
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b + (1 - ratio) * 0.2;
    }

    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom glowing particle canvas
    const createParticleTexture = () => {
      const matCanvas = document.createElement("canvas");
      matCanvas.width = 16;
      matCanvas.height = 16;
      const ctx = matCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(matCanvas);
    };

    const pointsMat = new THREE.PointsMaterial({
      size: 2.2,
      map: createParticleTexture(),
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(pointsGeo, pointsMat);
    globeGroup.add(particles);

    // 3. Network Arcs/Connections
    const lineCount = 35;
    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);

    const points: THREE.Vector3[] = [];
    // Retrieve coordinates from positions array
    for (let i = 0; i < particleCount; i += Math.floor(particleCount / 50)) {
      points.push(new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]));
    }

    const lineMat = new THREE.LineBasicMaterial({
      color: arcColor,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < lineCount; i++) {
      const p1 = points[Math.floor(Math.random() * points.length)];
      const p2 = points[Math.floor(Math.random() * points.length)];

      if (p1 && p2 && p1.distanceTo(p2) > 40 && p1.distanceTo(p2) < 140) {
        // Create an arc curve (quadratic bezier curve curving outwards)
        const midPoint = new THREE.Vector3()
          .addVectors(p1, p2)
          .multiplyScalar(0.5);
        // Push midPoint outwards to create the curvature
        const dist = p1.distanceTo(p2);
        midPoint.normalize().multiplyScalar(radius + dist * 0.25);

        const curve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
        const curvePoints = curve.getPoints(20);
        const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const arc = new THREE.Line(lineGeo, lineMat);
        arcsGroup.add(arc);
      }
    }

    // 4. Subtle Outer Atmosphere Glow Ring
    const ringGeo = new THREE.RingGeometry(85, 87, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: arcColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.1,
    });
    const glowRing = new THREE.Mesh(ringGeo, ringMat);
    scene.add(glowRing);

    // Mouse Interaction States
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation
      if (!isDragging) {
        globeGroup.rotation.y += 0.002;
        globeGroup.rotation.x += 0.0005;
      } else {
        // Smoothly interpolate rotation to target drag position
        globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.1;
        globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.1;
      }

      // Ring animation (pulsing scale and slight opposite rotation)
      const time = Date.now() * 0.001;
      glowRing.scale.setScalar(1 + Math.sin(time * 2) * 0.02);
      glowRing.rotation.z -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing min-h-[380px]"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary-blue/30 border-t-primary-blue animate-spin" />
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
