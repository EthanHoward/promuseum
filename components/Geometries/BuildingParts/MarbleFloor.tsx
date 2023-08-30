"use client";

interface __Props {
  position: [number, number, number];
  size: [number, number, number];
}

function __MarbleFloor({ position, size }: __Props) {
    
  
    return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial 
        
      />
    </mesh>
  );
}
