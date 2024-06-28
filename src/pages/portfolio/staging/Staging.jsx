import { Sky } from "@react-three/drei";

export default function Staging() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5}/>
      <Sky sunPosition={[100, 10, 100]} />
    </>
  );
}
