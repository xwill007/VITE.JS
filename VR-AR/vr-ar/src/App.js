import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import image1 from "./logo.svg";
import image2 from "./logo.svg";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (imageRef, src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = (error) => reject(error);
        image.src = src;
        imageRef.current = image;
      });
    };

    Promise.all([loadImage(imageRef1, image1), loadImage(imageRef2, image2)])
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.log("Error al cargar las imágenes:", error);
      });
  }, []);

  const renderStereoScene = () => {
    const ctx = canvasRef.current.getContext("2d");

    // Configura el tamaño del canvas para mostrar ambas imágenes una al lado de la otra
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;

    // Calcula el ancho de cada imagen dividiendo el canvas en dos
    const imageWidth = canvasRef.current.width / 2;

    // Limpia el canvas antes de dibujar las imágenes
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Dibuja la imagen de la cámara en el lado izquierdo del canvas
    ctx.drawImage(videoRef.current, 0, 0, imageWidth, canvasRef.current.height);

    // Dibuja una segunda imagen de la cámara en el lado derecho del canvas
    ctx.drawImage(
      videoRef.current,
      imageWidth,
      0,
      imageWidth,
      canvasRef.current.height
    );

    // Dibuja la imagen de realidad aumentada en el centro de la primera cámara
    ctx.drawImage(
      imageRef1.current,
      imageWidth / 2 - 15, // Posición X: la mitad del ancho del canvas menos la mitad del tamaño deseado (30px/2 = 15px)
      canvasRef.current.height / 2 - 15, // Posición Y: la mitad del alto del canvas menos la mitad del tamaño deseado (30px/2 = 15px)
      30, // Ancho de la imagen (30px)
      30 // Alto de la imagen (30px)
    );

    // Dibuja la imagen de realidad aumentada en el centro de la segunda cámara
    ctx.drawImage(
      imageRef2.current,
      imageWidth + imageWidth / 2 - 15, // Posición X: la mitad del ancho del canvas más la mitad del tamaño deseado (30px/2 = 15px)
      canvasRef.current.height / 2 - 15, // Posición Y: la mitad del alto del canvas menos la mitad del tamaño deseado (30px/2 = 15px)
      30, // Ancho de la imagen (30px)
      30 // Alto de la imagen (30px)
    );

    // Llama a la función de renderizado estereoscópico nuevamente en el siguiente cuadro de animación
    window.requestAnimationFrame(renderStereoScene);
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;

        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current.play();
        });
      } catch (error) {
        console.log("Error al acceder a la cámara:", error);
      }
    };

    startCamera();
  }, []);

  useEffect(() => {
    // Inicia el renderizado estereoscópico solo cuando las imágenes se hayan cargado
    if (imagesLoaded) {
      window.requestAnimationFrame(renderStereoScene);
    }
  }, [imagesLoaded]);

  return (
    <div className="App">
      <header className="App-header">
        <canvas ref={canvasRef} className="App-canvas" />
        <video ref={videoRef} className="App-video" autoPlay />
      </header>
    </div>
  );
}

export default App;
