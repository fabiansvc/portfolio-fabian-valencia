import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import useSignStore from "../../../../stores/store-sign-selected";
import { useCallback } from "react";

/**
 * Sign component
 *
 * This component renders a 3D model of a signpost with clickable areas
 * for navigating to different sections.
 *
 * @component
 * @param {object} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/sign.glb");
  const { setSign } = useSignStore();

  /**
   * Handles mouse pointer enter event.
   */
  const handlePointerEnter = useCallback(() => {
    document.body.style.cursor = "pointer";
  }, []);

  /**
   * Handles mouse pointer leave event.
   */
  const handlePointerLeave = useCallback(() => {
    document.body.style.cursor = "auto";
  }, []);

  /**
   * Handles sign click event.
   *
   * @param {string} name - The name of the section.
   * @param {Vector3} position - The camera position.
   */
  const handleSignClick = useCallback(
    (name, position) => {
      setSign({ name, positionCamera: position });
    },
    [setSign]
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.AboutMe_2.geometry}
        material={materials.AboutMeMaterial}
        onClick={() => handleSignClick("ABOUT_ME", new Vector3(4, 2, -5))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.AboutMe_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Skills_2.geometry}
        material={materials.SkillsMaterial}
        onClick={() => handleSignClick("SKILLS", new Vector3(2, 3, -8))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.Skills_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Projects_2.geometry}
        material={materials.ProjectsMaterial}
        onClick={() => handleSignClick("PROJECTS", new Vector3(-3, 3, -6))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.Projects_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.ContactMe_1.geometry}
        material={materials.ContactMeMaterial}
        onClick={() => handleSignClick("CONTACT_ME", new Vector3(-4, 2, -3))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.ContactMe_2.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Sign.geometry}
        material={materials.WoodMaterial}
      />
    </group>
  );
}

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/sign.glb");
