import { Canvas } from "@react-three/fiber";
import { Tree } from "./world/Tree";
import { Center, OrbitControls } from "@react-three/drei";
import { Hachi } from "./world/Hachi";

export default function Portfolio() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3.5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls position={[0, 0, 3.5]} target={[0, 0.5, 0]} />
      <Center position={[0, 0.5, 0]}>
        <Tree />
        <Hachi position={[0.5, 0, 0.5]} />
      </Center>
    </Canvas>
  );
}
