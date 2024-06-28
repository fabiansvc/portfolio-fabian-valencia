import { Canvas } from "@react-three/fiber";
import Staging from "./staging/Staging";
import Controls from "./controls/Controls";
import World from "./world/World";

export default function Portfolio() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 3] }}>
      <World />
      <Staging />
      <Controls />
    </Canvas>
  );
}
