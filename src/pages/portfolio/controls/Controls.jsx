import { OrbitControls } from "@react-three/drei";

export default function Controls() {
  return <OrbitControls position={[0, 2, 3]} target={[0, 1.75, 0]} />;
}
