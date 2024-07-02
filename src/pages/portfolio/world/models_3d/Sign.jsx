import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import useSignStore from "../../../../stores/store-sign-selected";
import { useCallback } from "react";

export default function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/sign.glb");
  const { setSignSelected } = useSignStore();
  
  const handlePointerEnter = useCallback(() => {
    document.body.style.cursor = 'pointer';
  }, []);

  const handlePointerLeave = useCallback(() => {
    document.body.style.cursor = 'auto';
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.AboutMe_2.geometry}
        material={materials.AboutMeMaterial}
        onClick={() => setSignSelected(new Vector3(4, 2, -5))}
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
        onClick={() => setSignSelected(new Vector3(2, 3, -8))}
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
        onClick={() => setSignSelected(new Vector3(-3, 3, -6))}
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
        onClick={() => setSignSelected(new Vector3(-4, 2, -3))}
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

useGLTF.preload("/assets/models_3d/sign.glb");
