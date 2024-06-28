import { useGLTF } from "@react-three/drei";

export function Floor(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/floor.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.FloorMaterial}
      />
    </group>
  );
}

useGLTF.preload("/assets/models_3d/floor.glb");
