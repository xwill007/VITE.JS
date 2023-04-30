import React from 'react';
import reactLogo from './assets/react.svg'

const LogoReact: React.FC = () => {
  return (
    <>
      <div>
        <a/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>  
  );
};
export default LogoReact;

/*
<a-scene>
      <a-sky src="https://picsum.photos/id/1025/2000/1000" rotation="0 -130 0"></a-sky>
      <a-text value="Hello, VR!" position="-1 0.5 -1" color="white"></a-text>
    </a-scene>
*/