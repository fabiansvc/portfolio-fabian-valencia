import { BakeShadows, ContactShadows, OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Lights from "./World/Lights";
import Environments from "./World/Environment";
import { Perf } from "r3f-perf";

const Experience = () => {
    return (
        <>
            <OrbitControls makeDefault />
            <Lights />
            <Perf />
            {/* <BakeShadows/> */}
            {/* <ContactShadows
                opacity={1}
                position-y={-1.9}
                frames={120}
                scale={10}
                blur={1}
                resolution={512}
                color="black"
            /> */}
            <Environments />
            <Bee position-x={2} scale={1.5} />
            <Tree position={[-2, -2, 2]} scale={0.04} />
            <WoodenFence position={[-1, -2, 2]} rotation-y={Math.PI / 2} />
            <WoodenFence position={[1, -2, 2]} rotation-y={-Math.PI / 2} />

            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow >
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color={0xB68338}  />
            </mesh>
        </>
    )
}

export default Experience;