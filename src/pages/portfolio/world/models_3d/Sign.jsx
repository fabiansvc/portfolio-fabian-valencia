import { useGLTF } from "@react-three/drei";

export function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/sign.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign.geometry}
        material={materials.WoodMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ContactMe_1.geometry}
        material={materials.ContactMeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ContactMe_2.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AboutMe_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AboutMe_2.geometry}
        material={materials.AboutMeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Projects_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Projects_2.geometry}
        material={materials.ProjectsMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skills_1.geometry}
        material={materials.TextMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skills_2.geometry}
        material={materials.SkillsMaterial}
      />
    </group>
  );
}

useGLTF.preload("/assets/models_3d/sign.glb");
