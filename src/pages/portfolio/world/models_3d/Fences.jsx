import { useGLTF } from '@react-three/drei'

export default function Fences(props) {
  const { nodes, materials } = useGLTF('/assets/models_3d/fences.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Fences.geometry}
        material={materials.FenceMaterial}
      />
    </group>
  )
}

useGLTF.preload('/assets/models_3d/fences.glb')
