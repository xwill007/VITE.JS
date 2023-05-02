import 'aframe';
import { Entity, Scene } from 'aframe-react';
import myImage from './assets/clouds.jpg';

const VrPlane = (): JSX.Element => {
  return (
    <Scene>
      <Entity
        geometry={{ primitive: 'plane', width: 3 , height: 2 }}
        position={{ x: 0, y: 2, z: -3 }}
        material={{ src: `url(${myImage})` }}
      />
      
    </Scene>
  );
};

export default VrPlane;

