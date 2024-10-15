// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import { Client } from 'colyseus.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FishTank from './models/FishTank';
import './styles/App.css';

function App() {
  const [fishes, setFishes] = useState({});
  const [peicesOfFood, setFood] = useState({});
  const roomRef = useRef(null);
  const effectRan = useRef(false); // Prevent multiple effect runs in React 18

  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;

    const client = new Client('ws://fish.burn.world:2567');

    client
      .joinOrCreate('fish_room')
      .then((joinedRoom) => {
        roomRef.current = joinedRoom;
        window.room = roomRef.current; // Expose room to global scope for debugging
        console.log('Joined room:', joinedRoom.name);

        // Update the local fishes state whenever the server state changes
        joinedRoom.onStateChange((state) => {
          //console.log('State changed:', state.toJSON());
          // Update the fishes state
          const fishesData = {};
          state.fishes.forEach((fish, key) => {
            fishesData[key] = fish.toJSON();
          });
          //console.log('Updated fishes state:', fishesData);
          setFishes(fishesData);

          const foodData = {};
          state.peicesOfFood.forEach((food, key) => {
            foodData[key] = food.toJSON();
          });
          setFood(foodData);

        });
      })
      .catch((err) => {
        console.error('Failed to join room:', err);
      });

    // Clean up on unmount
    return () => {
      if (roomRef.current) {
        roomRef.current.leave();
        console.log('Left room');
      }
    };
  }, []); // Empty dependency array
  
  const handleAddFood = () => {
    if (roomRef.current) {
      // Send a message to the server to add a piece of food
      roomRef.current.send('add_food', {
        x: Math.random() * 10 - 5,
        y: Math.random() * 5 - 2.5,
        z: Math.random() * 5 - 2.5,
      });
    }
  };

  return (
    <div className="App">
      <button onClick={handleAddFood}>Drop Food</button>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <FishTank 
          fishes={Object.values(fishes)} 
          peicesOfFood={Object.values(peicesOfFood)} 
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
