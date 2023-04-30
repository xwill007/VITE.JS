/*
import React from 'react';


const VRScene: React.FC = () => {
  return (
    <>
   
<html>
    
  <head>

    <title>React VR 360</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>

</html>

    </> 
  );
};

export default VRScene;
*/
import React from 'react';
import ReactDOM from 'react-dom';


import { useState } from 'react'
import './App.css'
import LogoReact from './LogoReact';
import VrPlane from './VrPlane';
import VrScene from './VrScene';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id="texto">
          <h1>...MULTIVERSO...</h1>
        </div> 

        <div id="vrS">
          <VrScene/>
          <LogoReact/>
        </div> 



    </>
  )
}

export default App
