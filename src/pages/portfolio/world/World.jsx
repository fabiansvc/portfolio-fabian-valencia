import Floor from "./models_3d/Floor";
import Fences from "./models_3d/Fences";
import Tree from "./models_3d/Tree";
import Sign from "./models_3d/Sign";
import Dog from "./models_3d/Dog";
import Camaleon from "./models_3d/Camaleon";
import { Canvas } from "@react-three/fiber";
import Staging from "./staging/Staging";
import Controls from "./controls/Controls";

export default function World() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 4] }}>
      <Floor />
      <Fences />
      <Tree />
      <Sign />
      <Dog position-x={1.5} rotation-y={-Math.PI * 0.1} />
      <Camaleon position={[0.08, 2.5, -0.08]} rotation-y={Math.PI * 0.25} />
      <Staging />
      <Controls />
    </Canvas>
  );
}
