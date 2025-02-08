import { useGLTF } from '@react-three/drei'

export default function Tersseract(props) {
  const { nodes, materials } = useGLTF('/models-3d/Tesseract.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.PZ.geometry} material={materials.PZMaterial} />
      <mesh geometry={nodes.PX.geometry} material={materials.PXMaterial} />
      <mesh geometry={nodes.NZ.geometry} material={materials.NZMaterial} />
      <mesh geometry={nodes.NX.geometry} material={materials.NXMaterial} />
      <mesh geometry={nodes.PY.geometry} material={materials.PYMaterial} />
      <mesh geometry={nodes.NY.geometry} material={materials.NYMaterial} />
      <mesh geometry={nodes.Room_1.geometry} material={materials.WoodMaterial} />
      <mesh geometry={nodes.Room_2.geometry} material={materials.WallMaterial} />
      <mesh geometry={nodes.Room_3.geometry} material={materials.WoodInternMaterial} />
      <mesh geometry={nodes.Room_4.geometry} material={materials.WindowMetallicMaterial} />
      <mesh geometry={nodes.Room_5.geometry} material={materials.GlassMaterial} />
      <mesh geometry={nodes.Room_6.geometry} material={materials.FloorMaterial} />
      <mesh geometry={nodes.Bed_1.geometry} material={materials.WoodBedMaterial} />
      <mesh geometry={nodes.Bed_2.geometry} material={materials.ShapesMaterial} />
      <mesh geometry={nodes.Bed_3.geometry} material={materials.PlainWaveMaterial} />
      <mesh geometry={nodes.Bed_4.geometry} material={materials.PillowCoffeeMaterial} />
      <mesh geometry={nodes.Bed_5.geometry} material={materials.PillowWhiteMaterial} />
      <mesh geometry={nodes.Table_1.geometry} material={materials.WoodMaterial} />
      <mesh geometry={nodes.Table_2.geometry} material={materials.SeparatorMaterial} />
      <mesh geometry={nodes.Table_3.geometry} material={materials.FeetMaterial} />
      <mesh geometry={nodes.Mackbook_1.geometry} material={materials.Black} />
      <mesh geometry={nodes.Mackbook_2.geometry} material={materials.Main} />
      <mesh geometry={nodes.Mackbook_3.geometry} material={materials.Second} />
      <mesh geometry={nodes.Mackbook_4.geometry} material={materials.KeysMain} />
      <mesh geometry={nodes.Mackbook_5.geometry} material={materials.KeysBottom} />
      <mesh geometry={nodes.Mackbook_6.geometry} material={materials.TopLine} />
      <mesh geometry={nodes.Mackbook_7.geometry} material={materials.DarkGrey} />
      <mesh geometry={nodes.Mackbook_8.geometry} material={materials.Outline} />
      <mesh geometry={nodes.Mackbook_9.geometry} material={materials.Screen} />
      <mesh geometry={nodes.Mackbook_10.geometry} material={materials.Logo} />
      <mesh geometry={nodes.Mackbook_11.geometry} material={materials.Text} />
      <mesh geometry={nodes.ChairOffice_1.geometry} material={materials.MaterialChairBlack} />
      <mesh geometry={nodes.ChairOffice_2.geometry} material={materials.MaterialChairRed} />
      <mesh geometry={nodes.TV_1.geometry} material={materials.ScreenTVMaterial} />
      <mesh geometry={nodes.TV_2.geometry} material={materials.BlackTVMaterial} />
      <mesh geometry={nodes.Lamp_1.geometry} material={materials.LampMaterial} />
      <mesh geometry={nodes.Lamp_2.geometry} material={materials.LightMaterial} />
    </group>
  )
}

useGLTF.preload('/models-3d/Tesseract.glb')