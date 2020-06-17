import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon'
import Plane from './components/Plane'
import Box from './components/Box'
import StaticBox from './components/StaticBox'
import Controls from './components/Controls'
import Player from './components/Player'
import Sun from './components/Sun';
import './App.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomPositions() {
  return [getRandomInt(1, 10), getRandomInt(10, 100), 0]
}

function App() {
  const ref = useRef()
  return (
    <Canvas
      style={{ background: "#171717" }}
      camera={{fov: 100, position: [0, 5, 20]}}
      shadowMap
      colorManagement
    >
      <Physics>
        <ambientLight />
        <Sun />
        <fog attach="fog" args={['#000', 0, 50]} />
        { [...Array(100).keys()].map((index) => <Box key={`box-${index}`} position={getRandomPositions()} />) }
        { [...Array(100).keys()].map((index) => <StaticBox key={`box-${index}`} position={getRandomPositions()} />) }
        <Plane />
        <Player ref={ref} />
      </Physics>
      <Controls playerRef={ref} />
    </Canvas>
  );
}

export default App;
