import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";

export default function Camaleon(props) {
  const group = useRef();
  const skinnedMeshRef = useRef();
  const [targetColor, setTargetColor] = useState(new Color(`hsl(${Math.random() * 360}, 100%, 50%)`));

  const { nodes, materials, animations } = useGLTF(
    "/assets/models_3d/camaleon.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Idle.play();
    return () => {
      actions.Idle.stop();
    };
  }, [actions]);

  useFrame((state, delta) => {
    if (skinnedMeshRef.current) {
      skinnedMeshRef.current.material.color.lerp(targetColor, delta * 0.5);

      if (state.clock.getElapsedTime() % 1 < delta) {
        setTargetColor(new Color(`hsl(${Math.random() * 360}, 100%, 50%)`));
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
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
