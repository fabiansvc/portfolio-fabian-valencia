import { useGLTF } from "@react-three/drei";

/**
 * Floor component
 *
 * This component renders a 3D model of a floor.
 *
 * @component
 * @param {object} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function Floor(props) {
  const { nodes, materials } = useGLTF("/assets/models_3d/floor.glb");

  // Render the floor mesh to receive shadows
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.FloorMaterial}
      />
    </group>
  );
}

// Preload the 3D model for optimization
useGLTF.preload("/assets/models_3d/floor.glb");
