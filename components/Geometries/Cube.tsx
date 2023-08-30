"use client";

import { TextureLoader, Texture, Side } from "three";
import { ITex2D } from "@/types/Types";

interface __Props {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
  side?: Side;
  texture?: ITex2D;
}

function __Cube({
  position,
  size,
  color = "hotpink",
  side = 0,
  texture,
}: __Props): JSX.Element {
  const InsertedJSX: any = [];
  if (texture) {
    const loader = new TextureLoader();
    const tex: Texture = loader.load(texture.texName);
    InsertedJSX.push(
      <meshStandardMaterial map={tex} color={color} side={side} />
    );
  } else InsertedJSX.push(<meshStandardMaterial color={color} side={side} />);

  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      {InsertedJSX}
    </mesh>
  );
}

export { __Cube };
