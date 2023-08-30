"use client";

import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

interface __Props {
  position: [number, number, number];
}

function __Museum({ position }: __Props): JSX.Element {
    const gltf = useGLTF("/museum/scene.gltf");

    return (
      <group position={position}>
        {/* Add your 3D content here using the loaded GLTF data */}
        <primitive object={gltf.scene} />
      </group>
    );
}

export { __Museum };
