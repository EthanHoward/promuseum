"use client";

import { BufferGeometry, Float32BufferAttribute } from "three";

interface __Props {
    position: [number, number, number];
    size: [number, number, number];
    color?: string;
}

function __CustomVertexGeometry({ position, size, color}: __Props): JSX.Element {

    const vertices = new Float32Array([
        0, 0, 0,
        0, size[1], 0,
        size[0], 0, 0
    ]);

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

    return (
        <mesh geometry={geometry}>
            <meshBasicMaterial color={color || 'white'} />
        </mesh>
    );
}

export {
    __CustomVertexGeometry
}