import { useGLTF } from '@react-three/drei'

export function Tree(props) {
  const { nodes, materials } = useGLTF('/assets/models_3d/tree/tree.glb')

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Tree_1.geometry} material={materials.Leaf} />
      <mesh castShadow receiveShadow geometry={nodes.Tree_2.geometry} material={materials.Root} />
    </group>
  )
}

useGLTF.preload('./assets/models_3d/tree/tree.glb')