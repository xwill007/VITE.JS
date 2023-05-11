import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe-video-controls';
import YouTubePlayer from 'youtube-iframe-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      showVideo: true
    };
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  toggleVideo() {
    this.setState({
      showVideo: !this.state.showVideo
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
          <video id="video" src="" crossorigin="anonymous" />
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 200}}/>
        <Entity text={{value: 'Vr, A-Frame React!', align: 'center'}} position={{x: 0, y: 0.5, z: -1}}/>

        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.1}}
          animation__rotate={{property: 'rotation', dur: 6000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 2000, loop: true, to: '2.0 2.0 2.0'}}
          position={{x: 4, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: 'black'}}/>
        </Entity>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>

        <Entity
          id='curve'
          geometry="primitive: cylinder; radius: 8; height: 8; openEnded: true; thetaLength: 300;"  
          //geometry={{ primitive: 'cylinder', radius: 3, height: 3, openEnded: true, 'theta-length': 290 }}
          material={{ color: this.state.color, side: 'double', opacity:'0.5' }}
          position={{ x: 0, y: 4, z: 0 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          >
          <Entity
            id="video"
            position={{ x: 0, y: 0, z: -5 }}
            geometry={{ primitive: 'plane', height: 3, width: 5 }}
            material={{ color: 'white', shader: 'flat', src: '#video', opacity: 0.9 }}
            scale="1 1 1"
            a-video={{ src: 'https://www.youtube.com/embed/XYpadB4VadY', autoPlay: true }} 
          >
            
          </Entity>
          

          

        </Entity>

        
        

      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
