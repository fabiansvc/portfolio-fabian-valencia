import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import useSignStore from "../../../../stores/store-sign-selected";

export default function Controls() {
  const orbitControlsRef = useRef();
  const { sign } = useSignStore();
  const epsilon = useMemo(() => 0.1, []);

  useFrame(({ camera }, delta) => {
    const step = 2 * delta;

    if (
      Math.abs(camera.position.x - sign.positionCamera.x) < epsilon &&
      Math.abs(camera.position.y - sign.positionCamera.y) < epsilon &&
      Math.abs(camera.position.z - sign.positionCamera.z) < epsilon
    ) {
      camera.position.set(sign.positionCamera.x, sign.positionCamera.y, sign.positionCamera.z);
      return;
    } 

    const newPosX = MathUtils.lerp(camera.position.x, sign.positionCamera.x, step);
    const newPosY = MathUtils.lerp(camera.position.y, sign.positionCamera.y, step);
    const newPosZ = MathUtils.lerp(camera.position.z, sign.positionCamera.z, step);

    camera.position.set(newPosX, newPosY, newPosZ);
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      target={[0, 1.75, 0]}
      maxPolarAngle={1.75}
      enableZoom={false}
      enablePan={false}
    />
  );
}
