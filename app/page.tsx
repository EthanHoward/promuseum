import Image from "next/image"; 
import {
  PMWorld,
  Cube,
  IceCube,
  CustomVertexGeometry,
  MuseumGeometry,
} from "@Components";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-neutral-700">
      <PMWorld>
        <Cube position={[0, -1, 0]} size={[200, 1, 200]} color="white" />
      </PMWorld>
    </div>
  );
}

/**
 * Need to decide how i will display all of the images in a museum-esque way
 * Write some nice shaders to make the sun well, work
 * Add other nice lighting features and maybe textures?
 *
 */

// https://vscode.dev/profile/github/9ac63e1c3f949bd96a5d0376685e16c8
