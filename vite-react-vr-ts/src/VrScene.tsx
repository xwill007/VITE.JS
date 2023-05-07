import React from 'react';
import { Entity, Scene } from 'aframe-react';
import myImage from './assets/clouds.jpg';
import 'aframe';
import LogoReact from './LogoReact';


const VrScene: React.FC = () => {
  return (
    <Scene>
      <Entity
        id="camara"
        primitive="a-camera"
        wasd-controls={{ acceleration: 10 }}
        constraint="target: #pantalla; type: box; size: 30 2 30"
        collision="objects: #pantalla;"
      >
        <LogoReact />
        <Entity primitive="a-cursor" />
      </Entity>

      <Entity
        id="sky"
        primitive="a-sky"
        radius="100"
        rotation="90 180 45"
        src="https://cdn.glitch.global/e20d5feb-5412-4c47-9272-48e617a890ee/nebulosa.jpg?v=1650590978196"
      />

      <Entity
        id="plano"
        geometry={{ primitive: 'plane', width: 20, height: 20 }}
        position={{ x: 0, y: 0, z: 0 }}
        rotation="270 0 0"
        material={{ color: 'black' }}
        side="double"
      />

      <Entity
        id="pantalla"
        geometry={{ primitive: 'plane', width: 10, height: 8 }}
        position={{ x: 0, y: 4, z: -6 }}
        material={{ src: `url(${myImage})` }}
        side="double"
        collision="objects: #camara;"
      />

      <Entity 
        id='arco'
        geometry="primitive: ring; radiusInner: 2.5; radiusOuter: 3; thetaLength: 180;"  
        material="color: red; side: double"
        position={{ x: 0, y: 0, z: -7 }}
        rotation="0 0 0"
      />

      <Entity
        id='curve'
        geometry="primitive: cylinder; radius: 8; height: 8; openEnded: true; thetaLength: 300;"  
        //geometry={{ primitive: 'cylinder', radius: 3, height: 3, openEnded: true, 'theta-length': 290 }}
        material={{ src: `url(${myImage})`, side: 'double', opacity:'0.5' }}
        position={{ x: 0, y: 4, z: 0 }}
        rotation={{ x: 0, y: 210, z: 0 }}
        
      />

      

    </Scene>
  );
};

export default VrScene;



