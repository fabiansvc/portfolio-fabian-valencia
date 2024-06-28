import { useGLTF } from '@react-three/drei'

export function Fences(props) {
  const { nodes, materials } = useGLTF('/assets/models_3d/fences.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fences.geometry}
        material={materials.FenceMaterial}
      />
    </group>
  )
}

useGLTF.preload('/assets/models_3d/fences.glb')
