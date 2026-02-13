
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Feature3DProps {
  id: string;
}

const Feature3D: React.FC<Feature3DProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    // Pre-rotate slightly for a better static view
    group.rotation.y = 0.5;
    group.rotation.x = 0.2;
    scene.add(group);
    meshRef.current = group;

    const brandColor = 0x1570EF;
    const accentColor = 0x53B1FD;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(brandColor, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(accentColor, 2);
    secondaryLight.position.set(-5, -5, 5);
    scene.add(secondaryLight);

    const createShape = (type: string) => {
      group.clear();
      const material = new THREE.MeshPhysicalMaterial({
        color: brandColor,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        wireframe: true,
        emissive: brandColor,
        emissiveIntensity: 0.5,
      });

      switch (type) {
        case 'bank-verification': {
          const base = new THREE.BoxGeometry(3, 0.2, 1.5);
          const top = new THREE.BoxGeometry(3, 0.2, 1.5);
          const pillarGeom = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 12);
          const bMesh = new THREE.Mesh(base, material);
          bMesh.position.y = -0.8;
          group.add(bMesh);
          const tMesh = new THREE.Mesh(top, material);
          tMesh.position.y = 0.8;
          group.add(tMesh);
          for (let i = -1; i <= 1; i++) {
            const p = new THREE.Mesh(pillarGeom, material);
            p.position.x = i * 1;
            group.add(p);
          }
          break;
        }
        case 'real-time': {
          for (let i = 0; i < 20; i++) {
            const geom = new THREE.BoxGeometry(Math.random() * 2, 0.05, 0.05);
            const streak = new THREE.Mesh(geom, material);
            streak.position.set(
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 2
            );
            group.add(streak);
          }
          break;
        }
        case 'security': {
          const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), material);
          group.add(core);
          const ringGeom = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
          const ring = new THREE.Mesh(ringGeom, material);
          ring.rotation.x = Math.PI / 2;
          group.add(ring);
          break;
        }
        case 'analytics': {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const h = Math.random() * 2 + 0.5;
              const bar = new THREE.Mesh(new THREE.BoxGeometry(0.6, h, 0.6), material);
              bar.position.set(i * 0.8, h/2 - 1, j * 0.8);
              group.add(bar);
            }
          }
          break;
        }
        case 'reconciliation': {
          const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 16, 100), material);
          const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.1, 16, 100), material);
          ring2.rotation.y = Math.PI / 2;
          group.add(ring1);
          group.add(ring2);
          break;
        }
        case 'multi-currency': {
          const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), material);
          group.add(sphere);
          break;
        }
        default:
          group.add(new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.3, 100, 16), material));
      }
    };

    createShape(id);
    
    // Perform a single render for the current state
    renderer.render(scene, camera);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [id]);

  return <div ref={containerRef} className="w-full h-full min-h-[300px] relative z-10" />;
};

export default Feature3D;
