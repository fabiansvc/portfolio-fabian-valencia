import { useGLTF } from "@react-three/drei";

export function Hachi(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/hachi/hachi.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dog.geometry}
        material={materials.Hair}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes.geometry}
        material={materials.Eyes}
      />
    </group>
  );
}

useGLTF.preload("/assets/models_3d/hachi/hachi.glb");
