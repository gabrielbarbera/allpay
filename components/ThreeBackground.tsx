
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const brandColor = 0x1570EF;
    
    // Create Nodes
    const nodesCount = 25;
    const nodes: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: brandColor, transparent: true, opacity: 0.3 });

    for (let i = 0; i < nodesCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      nodes.push(pos);
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      mesh.position.copy(pos);
      scene.add(mesh);
      nodeMeshes.push(mesh);
    }

    // Create Animated Flow Lines
    const flowMaterial = new THREE.LineBasicMaterial({
      color: brandColor,
      transparent: true,
      opacity: 0.05
    });

    const flowPoints: THREE.Vector3[][] = [];
    for (let i = 0; i < nodesCount; i++) {
      for (let j = i + 1; j < nodesCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4) {
          flowPoints.push([nodes[i], nodes[j]]);
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i], nodes[j]]);
          const line = new THREE.Line(geometry, flowMaterial);
          scene.add(line);
        }
      }
    }

    // Particles for flow
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: brandColor,
      size: 0.03,
      transparent: true,
      opacity: 0.8
    });
    
    // Flow logic
    const flowParticlesCount = 60;
    const particlesData: { pos: THREE.Vector3, startNode: number, endNode: number, progress: number, speed: number }[] = [];
    
    for (let i = 0; i < flowParticlesCount; i++) {
      const lineIdx = Math.floor(Math.random() * flowPoints.length);
      particlesData.push({
        pos: new THREE.Vector3(),
        startNode: lineIdx,
        endNode: lineIdx,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003
      });
    }

    const particlePositions = new Float32Array(flowParticlesCount * 3);
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    camera.position.z = 5;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Pulse nodes
      nodeMeshes.forEach((mesh, i) => {
        const material = mesh.material as THREE.MeshBasicMaterial;
        material.opacity = 0.1 + Math.sin(time + i) * 0.1;
        mesh.scale.setScalar(1 + Math.sin(time + i) * 0.2);
      });

      // Update flow particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      particlesData.forEach((p, i) => {
        const line = flowPoints[p.startNode];
        if (line) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
          
          const point = new THREE.Vector3().lerpVectors(line[0], line[1], p.progress);
          positions[i * 3] = point.x;
          positions[i * 3 + 1] = point.y;
          positions[i * 3 + 2] = point.z;
        }
      });
      particleGeometry.attributes.position.needsUpdate = true;

      scene.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = containerRef.current?.clientWidth || window.innerWidth;
      const h = containerRef.current?.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none opacity-60" />;
};

export default ThreeBackground;
