import { Canvas } from "@react-three/fiber";
import Tersseract from "./models-3d/Tersseract";
import {Stars } from "@react-three/drei";

const World = () => {
  return (
    <Canvas>
      <ambientLight />
      <Stars />
      <Tersseract />
    </Canvas>
  );
};

export default World;
