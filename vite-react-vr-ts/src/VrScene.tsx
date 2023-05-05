import React from 'react';
import { Entity, Scene } from 'aframe-react';
import myImage from './assets/clouds.jpg';
import 'aframe';
import LogoReact from './LogoReact';


const VrScene: React.FC = () => {
  return (
    <Scene>
      <Entity
        id="plano"
        geometry={{ primitive: 'plane', width: 20, height: 20 }}
        position={{ x: 0, y: 0, z: 0 }}
        rotation="270 0 0"
        material={{ color: 'blue' }}
        side="double"
        
      />

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
        id="pantalla"
        geometry={{ primitive: 'plane', width: 3, height: 2 }}
        position={{ x: 0, y: 2, z: -5 }}
        material={{ src: `url(${myImage})` }}
        side="double"
        collision="objects: #camara;"
      />

      <Entity 
        id='arco'
        geometry="primitive: ring; radiusInner: 2.5; radiusOuter: 3; thetaLength: 180;"  
        material="color: red;"
        position={{ x: 0, y: 0, z: 6 }}
        rotation="0 0 0"
      />

      <Entity
        id='cilindro'
        geometry={{ primitive: 'cylinder', radius: 3, height: 3, openEnded: true, "theta-length": 180 }}
        material={{ src: `url(${myImage})`, side: 'double' }}
        position={{ x: 0, y: 10, z: -5 }}
        rotation={{ x: 0, y: 180, z: 180 }}
      />

      <Entity
        id='curve'
        geometry={{
          primitive: "curve-plane",  //no funciona
          height: 2,
          radius: 3,
        }}
        material={{ color: "grey" }}
        position={{ x: 0, y: 3, z: -3 }}
        rotation={{ x: 0, y: 0, z: 0 }}
      />


    </Scene>
  );
};

export default VrScene;



