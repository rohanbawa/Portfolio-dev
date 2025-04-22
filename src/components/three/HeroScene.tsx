
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

// Floating particles component
const Particles = ({ count = 1000, color = '#9b87f5' }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const light = useRef<THREE.PointLight>(null!);
  
  // Generate random positions for particles
  useEffect(() => {
    if (mesh.current) {
      const tempObject = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        const radius = 10 + Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        
        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);
        
        tempObject.position.set(x, y, z);
        tempObject.updateMatrix();
        mesh.current.setMatrixAt(i, tempObject.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [count]);
  
  // Animate particles
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.2;
    if (mesh.current) {
      const tempObject = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        mesh.current.getMatrixAt(i, tempObject.matrix);
        tempObject.position.setFromMatrixPosition(tempObject.matrix);
        
        // Apply subtle movement
        tempObject.position.x += Math.sin(time + i * 0.1) * 0.01;
        tempObject.position.y += Math.cos(time + i * 0.1) * 0.01;
        tempObject.position.z += Math.sin(time + i * 0.1) * 0.01;
        
        tempObject.updateMatrix();
        mesh.current.setMatrixAt(i, tempObject.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
      
      // Move the light
      if (light.current) {
        light.current.position.x = Math.sin(time) * 10;
        light.current.position.y = Math.cos(time) * 10;
      }
    }
  });
  
  return (
    <>
      <pointLight ref={light} distance={20} intensity={2} color={color} />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
};

// Animated geometry
const AnimatedGeometry = ({ position = [0, 0, 0] as [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 4);
    mesh.current.rotation.y = Math.sin(t / 2);
    // Small floating movement
    mesh.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusKnotGeometry args={[1.5, 0.5, 128, 32]} />
      <meshStandardMaterial 
        color="#7E69AB" 
        metalness={0.5}
        roughness={0.2}
        envMapIntensity={0.8}
      />
    </mesh>
  );
};

// Mouse follower
const MouseFollower = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport, mouse } = useThree();
  
  useFrame(() => {
    if (mesh.current) {
      // Convert mouse coordinates to scene coordinates
      mesh.current.position.x = (mouse.x * viewport.width) / 2;
      mesh.current.position.y = (mouse.y * viewport.height) / 2;
      // Add a subtle rotation
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={mesh} scale={[0.5, 0.5, 0.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        metalness={0.8}
        roughness={0.2}
        emissive="#9b87f5"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Main scene component
const Scene = () => {
  const { camera } = useThree();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if on mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set appropriate camera position
    camera.position.z = isMobile ? 20 : 15;
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [camera, isMobile]);
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <AnimatedGeometry position={[0, 0, 0]} />
      <Particles count={isMobile ? 200 : 500} />
      {!isMobile && <MouseFollower />}
    </>
  );
};

// Main component that renders the Canvas
export default function HeroScene() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Canvas>
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}