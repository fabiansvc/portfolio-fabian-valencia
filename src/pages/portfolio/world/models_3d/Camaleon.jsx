import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";

export default function Camaleon(props) {
  const group = useRef();
  const skinnedMeshRef = useRef();
  const [hue, setHue] = useState(240);
  const [direction, setDirection] = useState(1); 
  const saturation = '100%';
  const lightness = '50%';
  const { nodes, materials, animations } = useGLTF("/assets/models_3d/camaleon.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Idle.play();
    return () => {
      actions.Idle.stop();
    };
  }, [actions]);

  useFrame((state, delta) => {
    if (skinnedMeshRef.current) {
      const hueStep = 10 * delta * direction; 

      setHue((prevHue) => {
        let nextHue = prevHue + hueStep;

        if (nextHue >= 360 || nextHue <= 240) {
          setDirection((prevDirection) => -prevDirection);
        }

        return nextHue;
      });

      const newColor = `hsl(${hue}, ${saturation}, ${lightness})`;
      skinnedMeshRef.current.material.color.set(new Color(newColor));
    }
  });

  return (
    <group ref={group} {...props}>
      <group name="Scene">
        <group name="Skeleton">
          <skinnedMesh
            ref={skinnedMeshRef}
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.EyesMaterial}
            skeleton={nodes.Eyes.skeleton}
          />
          <primitive object={nodes.Centro} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models_3d/camaleon.glb");
