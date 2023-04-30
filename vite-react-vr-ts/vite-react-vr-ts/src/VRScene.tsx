import React from 'react';
import { Entity, Scene } from 'aframe-react';
import myImage from './assets/clouds.jpg';
import 'aframe';
import VrPlane from './VrPlane';
import LogoReact from './LogoReact';

const VrScene: React.FC = () => {
return(
    <Scene> 

    <Entity primitive="a-camera">
        <LogoReact/>
        <Entity primitive="a-cursor" />
    </Entity>

    <Entity id="sky"
        primitive="a-sky" 
        radius="500"
        rotation='90 180 45'
        src="https://cdn.glitch.global/e20d5feb-5412-4c47-9272-48e617a890ee/nebulosa.jpg?v=1650590978196" 
    />

    <Entity id="plane"
        geometry={{ primitive: 'plane', width: 3 , height: 2 }}
        position={{ x: 0, y: 2, z: -3 }}
        material={{ src: `url(${myImage})` }}
    />



   
   

    </Scene>
    
    

    );
}
export default VrScene;