import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

const Floor = () => {
    const PATH = "/assets/textures/forest/";

    const propsTexture = useTexture({
        map: PATH + 'forestColor.jpg',
        normalMap: PATH + 'forestNormal.jpg',
        displacementMap: PATH + 'forestHeight.png',
        roughnessMap: PATH + 'forestRoughness.jpg',
        aoMap: PATH + 'forestAO.jpg',
    })

    const repeat = new Vector2(8, 8);

    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.repeat = repeat
    }

    const repeatWrapping = RepeatWrapping;
    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.wrapS = map.wrapT = repeatWrapping;
    }

    propsTexture.map.offset = propsTexture.normalMap.offset = propsTexture.displacementMap.offset = propsTexture.roughnessMap.offset = propsTexture.aoMap.offset = new Vector2(0.5, 0.5);

    return (
        <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow >
            <planeGeometry
                args={[12, 12, 20, 20]}
            />
            <meshStandardMaterial
                {...propsTexture}
            />
        </mesh>
    );
}
export default Floor;