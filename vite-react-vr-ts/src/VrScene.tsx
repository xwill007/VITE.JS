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
        radius="500"
        rotation="90 180 45"
        src="https://cdn.glitch.global/e20d5feb-5412-4c47-9272-48e617a890ee/nebulosa.jpg?v=1650590978196"
      />

      <Entity
        id="pantalla"
        geometry={{ primitive: 'plane', width: 3, height: 2 }}
        position={{ x: 0, y: 2, z: -3 }}
        material={{ src: `url(${myImage})` }}
        side="double"
        collision="objects: #camara;"
      />
    </Scene>
  );
};

export default VrScene;



