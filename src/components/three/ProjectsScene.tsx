
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCardProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  title: string;
  color: string;
  index: number;
}

const ProjectCard = ({ position, rotation = [0, 0, 0], title, color, index }: ProjectCardProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t + index * 0.5) * 0.1;
    mesh.current.rotation.y = rotation[1] + Math.sin(t * 0.5 + index) * 0.1;
  });
  
  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <RoundedBox args={[3, 2, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
      </RoundedBox>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </mesh>
  );
};

const ProjectsCarousel = () => {
  const projects = [
    { title: "Web Design", color: "#9b87f5" },
    { title: "Mobile App", color: "#7E69AB" },
    { title: "3D Modeling", color: "#6E59A5" },
    { title: "UI/UX Design", color: "#8B5CF6" }
  ];
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          position={[index * 4 - 6, 0, 0]}
          rotation={[0, -Math.PI * 0.05, 0]}
          title={project.title}
          color={project.color}
          index={index}
        />
      ))}
    </>
  );
};

export default function ProjectsScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ProjectsCarousel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}