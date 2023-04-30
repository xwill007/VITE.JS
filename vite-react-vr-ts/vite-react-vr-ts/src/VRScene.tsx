
import 'aframe';
import { Entity, Scene, Sky, Text } from 'aframe-react';

import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

const VRScene: React.FC = () => {
  const planeRef = useRef(null);

  useEffect(() => {

    html2canvas(document.querySelector('#page')).then((canvas) => {
        const dataURL = canvas.toDataURL();
        // Asignar la imagen al material del plano
        planeRef.current.setAttribute('material', { src: dataURL });
      });

    
  }, []);

  return (
    <>
      <div>
        <h1>"vr"</h1>
        <Scene>
          <Entity id="page"
            geometry={{ primitive: 'plane', width: 6, height: 4 }}
            position={{ x: 0, y: 2, z: -3 }}
            material={{ planeRef }}
          />
        </Scene>
      </div>
    </>
  );
};

export default VRScene;
