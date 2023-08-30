/**
 * This stores all exports for components from files within the components folder.
 * This is to make it neater when importing components: here is the comparison:
 * {World} from '@/components/World';
 * versus
 * {World} from '@Components';
 * 
 */

export {
    __World as PMWorld,
} from '@/components/World';

export {
    __Cube as Cube
} from '@/components/Geometries/Cube';

export {
    __CustomVertexGeometry as CustomVertexGeometry
} from '@/components/Geometries/CustomVertexGeometry';

export {
    __Museum as MuseumGeometry
} from '@/components/Geometries/Museum';

export {
    __IceCube as IceCube
} from '@/components/Geometries/IceCube';