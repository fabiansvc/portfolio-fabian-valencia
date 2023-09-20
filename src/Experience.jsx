import { OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Lights from "./World/Lights";
import Environments from "./World/Environment";
import Floor from "./World/Floor";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Sign from "./World/Sign";
import WelcomeText from "./World/WelcomeText";
import { AxesHelper } from "three";

const Experience = () => {
    return (
        <>
            {/* <Perf /> */}
            <OrbitControls target={[0, 1.5, 0]} />
            <Lights />
            <Environments />
            <Suspense fallback={null}>
                <Bee position={[2, 2, 0]} scale={1.5} />
                <Tree position={[-2, 0, 2]} scale={0.04} />
                <WoodenFence position={[-1, 0, 2]} rotation-y={Math.PI / 2} />
                <WoodenFence position={[1, 0, 2]} rotation-y={-Math.PI / 2} />
                <Floor  rotation-x={-Math.PI / 2} receiveShadow />
                <Sign >
                    <WelcomeText />
                </Sign>
                {/* <axesHelper args={[5]} position-y={0} /> */}
            </Suspense>
        </>
    )
}

export default Experience;