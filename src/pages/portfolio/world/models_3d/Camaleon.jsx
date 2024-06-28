import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Camaleon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models_3d/camaleon.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions.Idle);

    actions.Idle.play();

    return () => {
      actions.Idle.stop();
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Skeleton">
          <skinnedMesh
            castShadow
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.ScalesMaterial}
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
