"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface __Props {
    children: JSX.Element | any;
}

function __World({children}: __Props): JSX.Element {
  return (
  <Canvas className="w-full h-full flex-grow">
    <ambientLight />
    <OrbitControls 
        autoRotate={true}
        autoRotateSpeed={1.0}
        enablePan={true}
    />

    {children}
  </Canvas>
  );
}

export {
    __World
}