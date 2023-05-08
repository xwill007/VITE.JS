import React from 'react';
import 'aframe';
import Cloud from './clouds.jpg';
import Meet from './Meet.mp4';


function VrScene(){
    return(
    <a-scene>
      <a-assets>
        <img id='img' src={Cloud}/>
        <video id='vid' src={Meet}/>
        <a-mixin
         id="frame"
         geometry="primitive: plane; height: 4; width: 2"
         material="transparent:true"
         src= {Cloud}
        />
      </a-assets>

      <a-entity id="camera1"
        position="2 0 0"  //no cambia
        color ="black"
        >
        <a-camara   
          user-height="1.0"  //no cambia
          active="false"
          >
          <a-cursor>
          </a-cursor>
        </a-camara>
      </a-entity>

      <a-entity id="ui" position="0 2.1 -2.5">
        <a-entity id = "plano">
          <a-image 
            scale="1 1 0" 
            src= "#img" 
            color="yellow"
          />
        </a-entity >
        <a-entity id ="music-frame">
        </a-entity>
      </a-entity>

      <a-box 
        position="-1 0.5 -3" 
        rotation="0 45 0" 
        color="blue"
        src= "#img"
        opacity ="0.5"
      >
        <a-camara   
          active="true" // no actiav la camara en el objeto
          >
        </a-camara>
      </a-box>

      <a-sphere 
        position="0 1.25 -5" 
        radius="1.25" 
        color="red" 
        src ="#vid"
      ></a-sphere>
      
      <a-cylinder 
        position="1 0.75 -3" 
        radius="10" 
        height="10" 
        color="blue"
        side='double'
        opacity ="0.8"
      
        openEnded= 'true' //no funciona
        thetaLength= '300'  //no finciona
      ></a-cylinder>
      
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" transparent="true" opacity="1.0" mixin="frame"
      ></a-plane>
      
      <a-sky 
        src="https://cdn.glitch.global/e20d5feb-5412-4c47-9272-48e617a890ee/nebulosa.jpg?v=1650590978196"
      />

      

    </a-scene>
    );

   

}
export default VrScene;