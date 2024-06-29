import { OrbitControls } from "@react-three/drei";
import useSignStore from "../../../stores/store-sign-selected";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export default function Controls() {
  const orbitControlsRef = useRef();
  const { signSelected } = useSignStore();

  useFrame(({ camera }, delta) => {
    const step = 1 * delta;

    const newPosX = MathUtils.lerp(camera.position.x, signSelected.x, step);
    const newPosY = MathUtils.lerp(camera.position.y, signSelected.y, step);
    const newPosZ = MathUtils.lerp(camera.position.z, signSelected.z, step);

    camera.position.set(newPosX, newPosY, newPosZ);
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      target={[0, 1.75, 0]}
    />
  );
}
