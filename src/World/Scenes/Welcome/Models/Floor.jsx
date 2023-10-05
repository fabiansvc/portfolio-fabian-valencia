import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping, Vector2 } from "three";

const Floor = (props) => {
    const PATH = "/assets/textures/forest/";

    const propsTexture = useTexture({
        map: PATH + 'forestColor.jpg',
        normalMap: PATH + 'forestNormal.jpg',
        displacementMap: PATH + 'forestHeight.png',
        roughnessMap: PATH + 'forestRoughness.jpg',
        aoMap: PATH + 'forestAO.jpg',
    })

    const repeat = new Vector2(64, 64);

    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.repeat = repeat
    }

    const repeatWrapping = RepeatWrapping;
    for (const map of [propsTexture.map, propsTexture.normalMap, propsTexture.displacementMap, propsTexture.roughnessMap, propsTexture.aoMap]) {
        map.wrapS = map.wrapT = repeatWrapping;
    }

    propsTexture.map.offset = propsTexture.normalMap.offset = propsTexture.displacementMap.offset = propsTexture.roughnessMap.offset = propsTexture.aoMap.offset = new Vector2(0.5, 0.5);

    return (
        <RigidBody type="fixed">
            <mesh {...props} >
                <planeGeometry
                    args={[64, 64, 96, 96]}
                />
                <meshStandardMaterial
                    {...propsTexture}
                />
            </mesh>
        </RigidBody>

    );
}
export default Floor;