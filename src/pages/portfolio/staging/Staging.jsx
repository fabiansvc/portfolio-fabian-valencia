import { Sky } from "@react-three/drei";

export default function Staging() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow

        position={[10, 10, 15]}
        intensity={1.5}
      />
      <Sky sunPosition={[100, 10, 100]} />
    </>
  );
}
