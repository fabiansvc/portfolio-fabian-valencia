import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

/**
 * Dog component
 *
 * This component renders a 3D dog model with animations.
 *
 * @component
 * @param {object} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Dog(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models_3d/dog.glb");
  const { actions } = useAnimations(animations, group);

  // Play idle animation on mount and stop on unmount
  useEffect(() => {
    actions.Idle.play();

    return () => {
      actions.Idle.stop();
    };
  }, [actions]);

  // Render the 3D model components within a group
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

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/dog.glb");
