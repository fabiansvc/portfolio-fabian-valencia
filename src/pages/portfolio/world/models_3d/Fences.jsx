import { useGLTF } from "@react-three/drei";

/**
 * Fences component
 *
 * This component renders a 3D model of fences.
 *
 * @component
 * @param {object} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Fences(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/fences.glb");

  // Render the fences mesh with cast shadow
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Fences.geometry}
        material={materials.FenceMaterial}
      />
    </group>
  );
}

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/fences.glb");
