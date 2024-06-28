import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Dog(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models_3d/dog.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Idle.play();

    return () => {
      actions.Idle.stop();
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Dog">
          <skinnedMesh
            name="Body"
            castShadow
            geometry={nodes.Body.geometry}
            material={materials.DogMaterial}
            skeleton={nodes.Body.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models_3d/dog.glb");
