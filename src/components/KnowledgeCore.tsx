"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PARTICLE_COUNT = 1500;

export default function KnowledgeCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 120;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Core Animation State
    const coreState = {
      morphProgress: 0.0, // 0.0 to 8.0 representing transitions
      x: 0.0, // centered behind hero content
      y: 0.0, // vertically centered
      scale: 1.0,         // scale multiplier
      opacity: 0.85,      // overall particle opacity
      rotationSpeed: 1.0  // spin speed
    };

    // Define the 9 target shapes
    const shapes: THREE.Vector3[][] = [];

    // Helper: generate shapes
    const generateShapes = () => {
      // 0. Hero (Neural Sphere)
      const shape0: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        const r = 28 + Math.sin(i * 0.15) * 2;
        shape0.push(new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        ));
      }
      shapes.push(shape0);

      // 1. Capabilities (Core with orbiting satellites)
      const shape1: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (i < 500) {
          // Central core
          const phi = Math.acos(-1 + (2 * i) / 500);
          const theta = Math.sqrt(500 * Math.PI) * phi;
          const r = 12;
          shape1.push(new THREE.Vector3(
            r * Math.cos(theta) * Math.sin(phi),
            r * Math.sin(theta) * Math.sin(phi),
            r * Math.cos(phi)
          ));
        } else {
          // 6 satellite nodes
          const satelliteIdx = Math.floor((i - 500) / 166) % 6;
          const subIdx = (i - 500) % 166;
          const angle = (satelliteIdx * Math.PI * 2) / 6;
          const dist = 36;
          const satX = dist * Math.cos(angle);
          const satY = dist * Math.sin(angle);
          
          const phi = Math.acos(-1 + (2 * subIdx) / 166);
          const theta = Math.sqrt(166 * Math.PI) * phi;
          const r = 4;
          shape1.push(new THREE.Vector3(
            satX + r * Math.cos(theta) * Math.sin(phi),
            satY + r * Math.sin(theta) * Math.sin(phi),
            r * Math.cos(phi)
          ));
        }
      }
      shapes.push(shape1);

      // 2. Showcase (Holographic flat panels)
      const shape2: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const panelIdx = Math.floor(i / 500); // 0, 1, 2
        const subIdx = i % 500;
        const row = Math.floor(subIdx / 20); // 0..24
        const col = subIdx % 20; // 0..19
        const localX = (col - 9.5) * 1.8;
        const localY = (row - 12) * 1.8;

        if (panelIdx === 0) {
          shape2.push(new THREE.Vector3(-28 + localX * 0.9, localY, -6 + localX * 0.4));
        } else if (panelIdx === 1) {
          shape2.push(new THREE.Vector3(localX, localY - 3, 10));
        } else {
          shape2.push(new THREE.Vector3(28 + localX * 0.9, localY, -6 - localX * 0.4));
        }
      }
      shapes.push(shape2);

      // 3. Integrations (Dispersed network node / web)
      const shape3: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        const r = 38 + Math.sin(i * 0.05) * 8;
        shape3.push(new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        ));
      }
      shapes.push(shape3);

      // 4. Comparison (Layered Data Cube)
      const shape4: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const zIdx = Math.floor(i / 100); // 0..14
        const yIdx = Math.floor((i % 100) / 10); // 0..9
        const xIdx = i % 10; // 0..9
        
        const layer = Math.floor(zIdx / 5); // 0, 1, 2 layers
        const subZ = zIdx % 5;
        
        const localX = (xIdx - 4.5) * 4;
        const localY = (yIdx - 4.5) * 4;
        const localZ = (layer * 12) + (subZ - 2) * 2.5 - 12;
        shape4.push(new THREE.Vector3(localX, localY, localZ));
      }
      shapes.push(shape4);

      // 5. Sandbox (Digital City Grid / Matrix)
      const shape5: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (i < 500) {
          // Flat grid floor
          const col = i % 25;
          const row = Math.floor(i / 25);
          shape5.push(new THREE.Vector3((col - 12) * 2.8, -20, (row - 9.5) * 2.8));
        } else {
          // Vertical skyscraper lines
          const bIdx = Math.floor((i - 500) / 100); // 10 buildings
          const hIdx = (i - 500) % 100;
          
          const buildingPositions = [
            { x: -24, z: -16, h: 25 },
            { x: -10, z: -24, h: 42 },
            { x: 12, z: -14, h: 32 },
            { x: 24, z: 10, h: 45 },
            { x: -20, z: 20, h: 35 },
            { x: 0, z: 18, h: 52 },
            { x: 18, z: -24, h: 28 },
            { x: -7, z: 0, h: 58 },
            { x: 20, z: 24, h: 38 },
            { x: -28, z: 4, h: 32 }
          ];
          
          const bp = buildingPositions[bIdx];
          const localH = (hIdx / 99) * bp.h;
          shape5.push(new THREE.Vector3(
            bp.x + Math.sin(hIdx * 0.5) * 0.8,
            -20 + localH,
            bp.z + Math.cos(hIdx * 0.5) * 0.8
          ));
        }
      }
      shapes.push(shape5);

      // 6. Security (Hex Shield Grid dome)
      const shape6: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        const r = 32;
        shape6.push(new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        ));
      }
      shapes.push(shape6);

      // 7. Pricing (Three Crystal Towers)
      const shape7: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const cylIdx = Math.floor(i / 500); // 0, 1, 2
        const subIdx = i % 500;
        const hRatio = subIdx / 499;
        const heights = [28, 52, 75];
        const xOffsets = [-32, 0, 32];
        const angle = subIdx * 0.16;
        const r = 6;
        
        shape7.push(new THREE.Vector3(
          xOffsets[cylIdx] + r * Math.cos(angle),
          -25 + hRatio * heights[cylIdx],
          r * Math.sin(angle)
        ));
      }
      shapes.push(shape7);

      // 8. Final CTA (Dense Vortex Sphere)
      const shape8: THREE.Vector3[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        const r = 40;
        shape8.push(new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        ));
      }
      shapes.push(shape8);
    };

    generateShapes();

    // Create the geometry & populate initial points
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const darkColors = new Float32Array(PARTICLE_COUNT * 3);
    const lightColors = new Float32Array(PARTICLE_COUNT * 3);

    // Initial shape is state 0
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = shapes[0][i];
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      const mix = Math.random();
      const darkColor = new THREE.Color();
      const lightColor = new THREE.Color();

      if (mix < 0.40) {
        darkColor.setHex(0x42A5F5); // Sky cyan — globe highlight (bright in dark mode)
        lightColor.setHex(0x1A6FE8); // Electric blue (dark mode → light mode shift)
      } else if (mix < 0.72) {
        darkColor.setHex(0x1A6FE8); // Electric ocean blue — globe body
        lightColor.setHex(0x0D47A1); // Deep navy (darker in light mode)
      } else {
        darkColor.setHex(0xF5A623); // Solar gold — sun rays bursting from globe
        lightColor.setHex(0xFF8F00); // Warm amber (deeper in light mode)
      }

      darkColors[i * 3] = darkColor.r;
      darkColors[i * 3 + 1] = darkColor.g;
      darkColors[i * 3 + 2] = darkColor.b;

      lightColors[i * 3] = lightColor.r;
      lightColors[i * 3 + 1] = lightColor.g;
      lightColors[i * 3 + 2] = lightColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(darkColors), 3));

    const createCircularTexture = () => {
      const canvasTex = document.createElement("canvas");
      canvasTex.width = 16;
      canvasTex.height = 16;
      const ctxTex = canvasTex.getContext("2d");
      if (ctxTex) {
        const gradient = ctxTex.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.85)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctxTex.fillStyle = gradient;
        ctxTex.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvasTex);
    };

    const material = new THREE.PointsMaterial({
      size: 1.6,
      map: createCircularTexture(),
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Torus rings for State 1 (Capabilities)
    const ringsGroup = new THREE.Group();
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xF5A623, // Solar Gold
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });
    for (let k = 0; k < 3; k++) {
      const ringGeo = new THREE.RingGeometry(35 - k * 3, 35.2 - k * 3, 64);
      const ring = new THREE.Line(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + (k * 0.15);
      ring.rotation.y = k * 0.2;
      ringsGroup.add(ring);
    }
    scene.add(ringsGroup);

    // Holographic panels frames for State 2 (Showcase)
    const panelsGroup = new THREE.Group();
    const frameMat = new THREE.LineBasicMaterial({
      color: 0x1A6FE8, // Electric Ocean Blue
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });
    const panelCenters = [
      new THREE.Vector3(-28, 0, -6),
      new THREE.Vector3(0, -3, 10),
      new THREE.Vector3(28, 0, -6)
    ];
    panelCenters.forEach((c, idx) => {
      const panelFrameGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-18, -23, 0),
        new THREE.Vector3(18, -23, 0),
        new THREE.Vector3(18, 23, 0),
        new THREE.Vector3(-18, 23, 0),
        new THREE.Vector3(-18, -23, 0)
      ]);
      const frame = new THREE.Line(panelFrameGeo, frameMat);
      frame.position.copy(c);
      if (idx === 0) frame.rotation.y = 0.4;
      if (idx === 2) frame.rotation.y = -0.4;
      panelsGroup.add(frame);
    });
    scene.add(panelsGroup);

    // Orbiting Integrations nodes for State 3 (Integrations)
    const integrationsGroup = new THREE.Group();
    const nodes: THREE.Mesh[] = [];
    const colorsInt = [0x1A6FE8, 0xF5A623, 0x42A5F5, 0x0D47A1, 0xFF8F00];
    for (let k = 0; k < 5; k++) {
      const nodeGeo = new THREE.SphereGeometry(2.5, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: colorsInt[k],
        transparent: true,
        opacity: 0.0,
        wireframe: true
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      integrationsGroup.add(node);
      nodes.push(node);
    }
    scene.add(integrationsGroup);

    // Hex Dome for State 6 (Security)
    const shieldGeo = new THREE.IcosahedronGeometry(36, 2);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623, // Solar Gold Shield Dome
      wireframe: true,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });
    const shieldDome = new THREE.Mesh(shieldGeo, shieldMat);
    scene.add(shieldDome);

    // Initial Elastic Entrance Animation
    gsap.from(coreState, {
      scale: 0.0,
      opacity: 0.0,
      duration: 2.2,
      ease: "elastic.out(1, 0.75)",
    });

    // Create a unified GSAP ScrollTrigger timeline to handle smooth, scrubbed transitions
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.8, // Smooth scrub easing
      }
    });

    // Animate active properties sequentially through the timeline
    // The main container height maps from 0% (Hero) to 100% (Final CTA)
    scrollTimeline
      .to(coreState, { morphProgress: 1.0, x: 0.0, y: 0.0, scale: 1.1, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 2.0, x: 0.0, y: -1.0, scale: 1.18, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 3.0, x: 1.8, y: 0.0, scale: 0.95, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 4.0, x: -1.8, y: 0.0, scale: 0.9, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 5.0, x: 0.0, y: -0.4, scale: 1.25, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 5.8, x: 1.8, y: 0.0, scale: 0.85, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 6.0, x: 0.0, y: 0.0, scale: 1.15, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 7.0, x: 0.0, y: -0.2, scale: 0.8, duration: 1.0, ease: "power1.inOut" })
      .to(coreState, { morphProgress: 8.0, x: 0.0, y: -0.4, scale: 1.4, duration: 1.0, ease: "power1.inOut" });

    // Mouse drift and follow tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.targetY = (e.clientY - height / 2) / (height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Handle viewport resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Helper to calculate light/dark mode interpolation factor (0 = dark mode, 1 = light mode)
    const getThemeFactor = (progress: number) => {
      if (progress <= 0.0) return 0;
      if (progress >= 8.0) return 0;
      
      const points = [
        { p: 0.0, t: 0 }, // Hero (Dark)
        { p: 1.0, t: 1 }, // Features (Light)
        { p: 2.0, t: 0 }, // Showcase (Dark)
        { p: 3.0, t: 1 }, // Integrations (Light)
        { p: 4.0, t: 1 }, // Comparison (Light)
        { p: 5.0, t: 0 }, // Demo (Dark)
        { p: 5.8, t: 1 }, // Testimonials (Light)
        { p: 6.0, t: 1 }, // Security (Light)
        { p: 7.0, t: 1 }, // Pricing (Light)
        { p: 8.0, t: 0 }  // CTA/Footer (Dark)
      ];
      
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i+1];
        if (progress >= p1.p && progress <= p2.p) {
          const ratio = (progress - p1.p) / (p2.p - p1.p);
          return p1.t * (1 - ratio) + p2.t * ratio;
        }
      }
      return 0;
    };

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const time = (performance.now() - startTime) * 0.001;

      // Smooth mouse follow interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Camera parallax drift
      const targetCamX = mouse.x * 18;
      const targetCamY = -mouse.y * 18;
      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.lookAt(new THREE.Vector3(mouse.x * 6, -mouse.y * 6, 0));

      // Update positions buffer based on morphProgress state
      const posArr = geometry.attributes.position.array as Float32Array;
      const progress = coreState.morphProgress;
      const baseStateIdx = Math.floor(progress);
      const targetStateIdx = Math.min(baseStateIdx + 1, shapes.length - 1);
      const ratio = progress - baseStateIdx;

      const fromShape = shapes[baseStateIdx];
      const toShape = shapes[targetStateIdx];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const fromP = fromShape[i];
        const toP = toShape[i];

        const targetX = fromP.x * (1 - ratio) + toP.x * ratio;
        const targetY = fromP.y * (1 - ratio) + toP.y * ratio;
        const targetZ = fromP.z * (1 - ratio) + toP.z * ratio;

        const offsetMultiplier = Math.sin(time * 2 + i * 0.05) * 0.45;
        posArr[i * 3] = targetX + offsetMultiplier;
        posArr[i * 3 + 1] = targetY + offsetMultiplier;
        posArr[i * 3 + 2] = targetZ + offsetMultiplier;
      }
      geometry.attributes.position.needsUpdate = true;

      // Dynamic color interpolation for particles
      const colorArr = geometry.attributes.color.array as Float32Array;
      const themeFactor = getThemeFactor(progress);
      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        colorArr[i] = darkColors[i] * (1 - themeFactor) + lightColors[i] * themeFactor;
      }
      geometry.attributes.color.needsUpdate = true;

      // Dynamic blending and size adjustments
      const targetBlending = themeFactor > 0.5 ? THREE.NormalBlending : THREE.AdditiveBlending;
      if (material.blending !== targetBlending) {
        material.blending = targetBlending;
        material.needsUpdate = true;
      }
      material.size = 1.6 * (1 - themeFactor) + 2.2 * themeFactor;

      // Auxiliary animations & opacity fades
      if (progress >= 0.5 && progress <= 1.8) {
        ringMat.opacity = Math.max(0, Math.min(0.25, (progress - 0.5) / 0.5));
        ringsGroup.rotation.y = time * 0.15;
        // Shift ring color to dark blue in light mode
        ringMat.color.setHex(themeFactor > 0.5 ? 0x0B57D0 : 0xF59E0B);
        ringMat.blending = themeFactor > 0.5 ? THREE.NormalBlending : THREE.AdditiveBlending;
      } else {
        ringMat.opacity = 0;
      }

      if (progress >= 1.5 && progress <= 2.8) {
        frameMat.opacity = Math.max(0, Math.min(0.12, (progress - 1.5) / 0.5));
        panelsGroup.rotation.y = Math.sin(time * 0.5) * 0.05;
      } else {
        frameMat.opacity = 0;
      }

      if (progress >= 2.5 && progress <= 3.8) {
        const opacity = Math.max(0, Math.min(0.4, (progress - 2.5) / 0.5));
        nodes.forEach((node, idx) => {
          const orbitAngle = time * 0.4 + (idx * Math.PI * 2) / 5;
          node.position.set(50 * Math.cos(orbitAngle), 20 * Math.sin(time + idx), 50 * Math.sin(orbitAngle));
          (node.material as THREE.MeshBasicMaterial).opacity = opacity;
        });
      } else {
        nodes.forEach(node => {
          (node.material as THREE.MeshBasicMaterial).opacity = 0;
        });
      }

      if (progress >= 5.5 && progress <= 6.8) {
        const targetOpacity = progress <= 6.0 
          ? (progress - 5.5) / 0.5 
          : 1.0 - (progress - 6.0) / 0.8;
        shieldMat.opacity = Math.max(0, Math.min(0.18, targetOpacity * 0.18));
        shieldDome.rotation.y = time * 0.08;
        shieldDome.rotation.z = time * 0.03;
        
        const pulse = 1.0 + Math.sin(time * 4) * 0.015;
        shieldDome.scale.set(pulse, pulse, pulse);
        
        // Shift shield color to deep royal blue in light mode
        shieldMat.color.setHex(themeFactor > 0.5 ? 0x0B57D0 : 0xF59E0B);
        shieldMat.blending = themeFactor > 0.5 ? THREE.NormalBlending : THREE.AdditiveBlending;
      } else {
        shieldMat.opacity = 0;
      }

      // Position, scale, and spin core group based on coreState and mouse parallax
      const scalarScale = coreState.scale * (window.innerWidth < 1024 ? 0.6 : 1.0);
      particleSystem.scale.setScalar(scalarScale);
      ringsGroup.scale.setScalar(scalarScale);
      panelsGroup.scale.setScalar(scalarScale);
      integrationsGroup.scale.setScalar(scalarScale);
      shieldDome.scale.copy(particleSystem.scale);

      // Translate core group
      const baseThreeX = coreState.x * 22;
      const baseThreeY = coreState.y * 22;
      particleSystem.position.set(baseThreeX + mouse.x * 9, baseThreeY - mouse.y * 9, 0);
      ringsGroup.position.copy(particleSystem.position);
      panelsGroup.position.copy(particleSystem.position);
      integrationsGroup.position.copy(particleSystem.position);
      shieldDome.position.copy(particleSystem.position);

      // Spin with mouse parallax overlay
      particleSystem.rotation.y = time * 0.12 * coreState.rotationSpeed + mouse.x * 0.45;
      particleSystem.rotation.x = time * 0.04 * coreState.rotationSpeed - mouse.y * 0.45;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up WebGL resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      ringMat.dispose();
      frameMat.dispose();
      shieldMat.dispose();
      ringsGroup.children.forEach(c => (c as THREE.Line).geometry.dispose());
      panelsGroup.children.forEach(c => (c as THREE.Line).geometry.dispose());
      integrationsGroup.children.forEach(c => (c as THREE.Mesh).geometry.dispose());
      shieldGeo.dispose();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
