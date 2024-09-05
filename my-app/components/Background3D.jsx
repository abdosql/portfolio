'use client';

import { useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), { ssr: false });
const useFrame = dynamic(() => import('@react-three/fiber').then((mod) => mod.useFrame), { ssr: false });
const OrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), { ssr: false });
const Sphere = dynamic(() => import('@react-three/drei').then((mod) => mod.Sphere), { ssr: false });
const Box = dynamic(() => import('@react-three/drei').then((mod) => mod.Box), { ssr: false });

const CodeObject = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={position}>
      <meshStandardMaterial color="#FF3B3F" wireframe />
    </Box>
  );
};

const FloatingObject = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 16, 16]} position={position}>
      <meshStandardMaterial color="#4CAF50" />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CodeObject position={[-2, 0, 0]} />
      <CodeObject position={[2, 0, 0]} />
      <FloatingObject position={[0, 2, 0]} />
      <FloatingObject position={[-3, -2, -2]} />
      <FloatingObject position={[3, -2, -2]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

const Background3D = () => (
  <Suspense fallback={null}>
    <Scene />
  </Suspense>
);

export default Background3D;