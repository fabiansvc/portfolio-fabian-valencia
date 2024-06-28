import { Canvas } from "@react-three/fiber";
import { Tree } from "./world/Tree";
import { OrbitControls } from "@react-three/drei";

export default function Portfolio () {
  return (
    <Canvas shadows>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls/>
        <Tree/>
    </Canvas>
  )
}