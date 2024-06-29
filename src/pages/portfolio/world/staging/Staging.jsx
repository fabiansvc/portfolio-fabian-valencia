import { BakeShadows, Sky } from "@react-three/drei";

export default function Staging() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[10, 10, 10]}
        intensity={1.5}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={10}
        shadow-camera-bottom={-100}
        shadow-camera-near={10}
      />
      <Sky sunPosition={[0, 1, 0]} />
      <BakeShadows />
    </>
  );
}
