import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return <OrbitControls position={[0, 0, 3.5]} target={[0, 0.5, 0]} />;
}
