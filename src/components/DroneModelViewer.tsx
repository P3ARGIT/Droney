import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// DroneModel component to handle the 3D model
const DroneModel = ({ 
  isHovered, 
  setIsHovered 
}: { 
  isHovered: boolean; 
  setIsHovered: (value: boolean) => void;
}) => {
  // Add proper type to useRef
  const modelRef = useRef<THREE.Group>(null);
  // Try using useGLTF instead of useLoader
  const { scene } = useGLTF('/models/dji_mini_3_pro/scene.gltf');
  
  // Auto-rotate when not hovered
  useFrame((state, delta) => {
    if (modelRef.current && !isHovered) {
      modelRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <group
      ref={modelRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      position={[0, -1, -3]}
      scale={[40, 40, 40]}
    >
      <primitive object={scene} />
    </group>
  );
};

const DroneModelViewer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-gray-500 text-lg font-medium bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm opacity-70">
          Hover to interact with the drone
        </p>
      </div>
      
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <spotLight position={[30, 10, 2]} angle={0.10} penumbra={0.5} intensity={2} />
          <DroneModel isHovered={isHovered} setIsHovered={setIsHovered} />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={isHovered}
            autoRotate={!isHovered}
            autoRotateSpeed={0.002}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default DroneModelViewer;