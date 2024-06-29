import { useGLTF } from "@react-three/drei";
import useSignStore from "../../../../stores/store-sign-selected";

export function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/sign.glb");
  const { setSignSelected } = useSignStore();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Sign.geometry}
        material={materials.WoodMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.ContactMe_1.geometry}
        material={materials.ContactMeMaterial}
        onClick={() => setSignSelected("CONTACT_ME")}
      />
      <mesh
        castShadow
        geometry={nodes.ContactMe_2.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.AboutMe_1.geometry}
        material={materials.TextMaterial}
        onClick={() => setSignSelected("ABOUT_ME")}
      />
      <mesh
        castShadow
        geometry={nodes.AboutMe_2.geometry}
        material={materials.AboutMeMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Projects_1.geometry}
        material={materials.TextMaterial}
        onClick={() => setSignSelected("PROJECTS")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Projects_2.geometry}
        material={materials.ProjectsMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Skills_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Skills_2.geometry}
        material={materials.SkillsMaterial}
        onClick={() => setSignSelected("SKILLS")}
      />
    </group>
  );
}

useGLTF.preload("/assets/models_3d/sign.glb");
