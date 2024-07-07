import { useGLTF } from "@react-three/drei";

/**
 * Tree component
 *
 * Renders a 3D model of a tree with different parts.
 *
 * @component
 * @param {object} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
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

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/tree.glb");
