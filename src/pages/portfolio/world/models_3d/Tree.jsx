import { useGLTF } from "@react-three/drei";

export default function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/tree.glb");
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Tree_1.geometry}
        material={materials.LeafMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Tree_2.geometry}
        material={materials.RootMaterial}
      />
    </group>
  );
}

useGLTF.preload("/assets/models_3d/tree.glb");
