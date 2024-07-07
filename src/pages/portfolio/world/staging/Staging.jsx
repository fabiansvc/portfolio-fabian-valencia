import { BakeShadows, Sky, Stars } from "@react-three/drei";

export default function Staging() {

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[-10, 5, -20]}
        intensity={1}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={10}
        shadow-camera-bottom={-100}
        shadow-camera-near={10}
      />

      <directionalLight position={[3, 5, 10]} intensity={2} />
      <Sky
        sunPosition={[-0.5, 0, -1]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        elevation={5}
        mieDirectionalG={0.07}
        rayleigh={3}
        turbidity={0.5}
      />
      <Stars count={1000} depth={100} speed={1.5}/>
      <BakeShadows />
    </>
  );
}

