import React from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const LogoReact: React.FC = () => {
  return (
    <>
      <div>
        <h1>"vr"</h1>
        <Scene>
            <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 1, z: -3}} />
        </Scene>
      </div>
    </>  
  );
};
export default LogoReact;

/*

*/