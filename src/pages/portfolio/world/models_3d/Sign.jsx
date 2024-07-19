import { Text, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import useSignStore from "../../../../stores/store-sign-selected";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("general");

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

  /**
   * Text component for displaying text on the sign.
   *
   * @param {object} props - The props for the Text component.
   * @returns {JSX.Element} The rendered component.
   */
  const SignText = ({ text, position, rotation }) => (
    <Text
      fontSize={0.16}
      color="#000000"
      position={position}
      rotation={rotation}
    >
      {text}
    </Text>
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.AboutMe.geometry}
        material={materials.AboutMeMaterial}
        onClick={() => handleSignClick("ABOUT_ME", new Vector3(4, 2, -5))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.Skills.geometry}
        material={materials.SkillsMaterial}
        onClick={() => handleSignClick("SKILLS", new Vector3(2, 3, -8))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.Projects.geometry}
        material={materials.ProjectsMaterial}
        onClick={() => handleSignClick("PROJECTS", new Vector3(-3, 3, -6))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.ContactMe.geometry}
        material={materials.ContactMeMaterial}
        onClick={() => handleSignClick("CONTACT_ME", new Vector3(-4, 2, -3))}
        onPointerOver={handlePointerEnter}
        onPointerOut={handlePointerLeave}
      />
      <mesh
        castShadow
        geometry={nodes.Sign.geometry}
        material={materials.WoodMaterial}
      />
      <SignText
        text={t("signTitle.0.aboutMe")}
        position={[0.035, 2.23, 0.05]}
        rotation={[0, 5 * (Math.PI / 180), -8 * (Math.PI / 180)]}
      />
      <SignText
        text={t("signTitle.0.projects")}
        position={[0.025, 1.86, 0.05]}
        rotation={[0, -5 * (Math.PI / 180), 0]}
      />
      <SignText
        text={t("signTitle.0.skills")}
        position={[0.05, 1.425, 0.05]}
        rotation={[0, -5 * (Math.PI / 180), 7 * (Math.PI / 180)]}
      />
      <SignText
        text={t("signTitle.0.contactMe")}
        position={[0.04, 0.955, 0.05]}
        rotation={[0, 5 * (Math.PI / 180), 0]}
      />
    </group>
  );
}

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/sign.glb");
