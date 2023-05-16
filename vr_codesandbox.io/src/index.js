import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";
import "aframe-video-controls";
import teclab_a from "./img/a.png";
import teclab_b from "./img/b.png";
import teclab_c from "./img/c.png";
import teclab_d from "./img/d.png";

var rCilindro = 8;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      showVideo: true,
    };
  }

  changeColor() {
    const colors = ["red", "orange", "yellow", "green", "blue"];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  toggleVideo() {
    this.setState({
      showVideo: !this.state.showVideo,
    });
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
          <video
            id="video-saggy"
            src="https://cdn.glitch.me/61732b1f-82bc-47c6-8fc4-d1edb5fedda0/it%20wasnt%20me.mp4?v=1650222142149"
          ></video>
          <video
            id="video-moon"
            src="https://cdn.glitch.me/e20d5feb-5412-4c47-9272-48e617a890ee/Get%20You%20The%20Moon%20InEs.mp4?v=1650570720919"
            type="video/mp4"
          ></video>
          <img id="img1" src={teclab_a} rotation="0 0 0" />\
          <img id="img2" src={teclab_b} />\
          <img id="img3" src={teclab_c} />
          <img id="img4" src={teclab_d} />
        </a-assets>
        <Entity
          primitive="a-plane"
          src="#groundTexture"
          height="100"
          width="100"
          rotation="-90 0 0"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: "snow", particleCount: 200 }} />
        <Entity
          text={{ value: "Vr, A-Frame React!", align: "center" }}
          position={{ x: 0, y: 0.5, z: -1 }}
        />
        <Entity
          id="box"
          geometry={{ primitive: "box" }}
          position={{ x: 3, y: 1, z: -1 }}
          material={{ color: this.state.color, opacity: 0.1 }}
          events={{ click: this.changeColor.bind(this) }}
          animation__rotate={{
            property: "rotation",
            dur: 6000,
            loop: true,
            to: "360 360 360",
          }}
          animation__scale={{
            property: "scale",
            dir: "alternate",
            dur: 2000,
            loop: true,
            to: "2.0 2.0 2.0",
          }}
        >
          <Entity
            id="miniBox"
            animation__scale={{
              property: "scale",
              dir: "alternate",
              dur: 100,
              loop: true,
              to: "2 2 2",
            }}
            geometry={{ primitive: "box", depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: "black" }}
          />
        </Entity>
        <Entity primitive="a-camera" position="0 2.5 0">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: "scale",
              startEvents: "click",
              from: "0.1 0.1 0.1",
              to: "1 1 1",
              dur: 150,
            }}
          />
        </Entity>
        <Entity
          id="curve"
          geometry="primitive: cylinder; radius: 8; height: 9; openEnded: true; thetaLength: 300;"
          material={{
            color: this.state.color,
            side: "double",
            opacity: "0.1",
          }}
          position={{ x: 0, y: 4, z: 0 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        >
          <Entity
            id="video1"
            position={{ x: 0, y: 0, z: 0.1 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            geometry={{
              primitive: "cylinder",
              height: 8,
              width: 5,
              radius: 5,
              openEnded: true,
              thetaLength: 89,
            }}
            material={{
              color: "white",
              shader: "flat",
              src: "#img1",
              autoPlay: false,
              opacity: 0.9,
              side: "double",
              repeat: "-1 1",
            }}
          />
          <Entity
            id="video2"
            position={{ x: 0, y: 0, z: 0.1 }}
            rotation={{ x: 0, y: 90, z: 0 }}
            geometry={{
              primitive: "cylinder",
              height: 8,
              width: 5,
              radius: 5,
              openEnded: true,
              thetaLength: 89,
            }}
            material={{
              color: "white",
              shader: "flat",
              src: "#img2",
              autoPlay: false,
              opacity: 0.9,
              side: "double",
              repeat: "-1 1",
            }}
          />
          <Entity
            id="video3"
            position={{ x: 0, y: 0, z: 0.1 }}
            rotation={{ x: 0, y: 180, z: 0 }}
            geometry={{
              primitive: "cylinder",
              height: 8,
              width: 5,
              radius: 5,
              openEnded: true,
              thetaLength: 89,
            }}
            material={{
              color: "white",
              shader: "flat",
              src: "#img3",
              autoPlay: false,
              opacity: 0.9,
              side: "double",
              repeat: "-1 1",
            }}
          />
          <Entity
            id="video4"
            position={{ x: 0, y: 0, z: 0.1 }}
            rotation={{ x: 0, y: 270, z: 0 }}
            geometry={{
              primitive: "cylinder",
              height: 8,
              width: 5,
              radius: 5,
              openEnded: true,
              thetaLength: 89,
            }}
            material={{
              color: "white",
              shader: "flat",
              src: "#img4",
              autoPlay: false,
              opacity: 0.9,
              side: "double",
              repeat: "-1 1",
            }}
          />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#sceneContainer"));
