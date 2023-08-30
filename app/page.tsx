import Image from 'next/image'
import { PMWorld, Cube, CustomVertexGeometry } from '@Components';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-neutral-700'>
      <PMWorld> 
        <CustomVertexGeometry position={[0, 0, 0]} size={[1, 1, 1]} color='hotpink' />
      </PMWorld>
    </div>  
  )
}


/**
 * Need to decide how i will display all of the images in a museum-esque way
 * Write some nice shaders to make the sun well, work
 * Add other nice lighting features and maybe textures?
 * 
 */

// https://vscode.dev/profile/github/9ac63e1c3f949bd96a5d0376685e16c8