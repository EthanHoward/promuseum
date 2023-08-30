import { attach } from '@react-three/fiber/dist/declarations/src/core/utils';
import { __Cube } from './Cube';

function __IceCube(): JSX.Element {
    return (
        <>
            <__Cube 
                position={[0, 0, 0]}
                size={[1, 1, 1]}
                texture={{
                    texName: '/ice_cube.jfif',
                    attach: "material"
                }}
                color='white'
            />
        </>
    )
}

export {
    __IceCube
}