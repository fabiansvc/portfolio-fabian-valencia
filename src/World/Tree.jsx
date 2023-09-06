import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models/tree/tree.glb");
  return (
    <group {...props}  dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.formica_cinza}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Vegetation_Bark_Maple_1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/tree/tree.glb");