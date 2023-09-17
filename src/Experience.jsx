import { OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Lights from "./World/Lights";
import Environments from "./World/Environment";
import Floor from "./World/Floor";
import { Suspense } from "react";
import { Perf } from "r3f-perf";

const Experience = () => {
    return (
        <>
            {/* <Perf /> */}
            <OrbitControls makeDefault />
            <Lights />
            <Environments />
            <Suspense fallback={null}>
                <Bee position-x={2} scale={1.5} />
                <Tree position={[-2, -2, 2]} scale={0.04} />
                <WoodenFence position={[-1, -2, 2]} rotation-y={Math.PI / 2} />
                <WoodenFence position={[1, -2, 2]} rotation-y={-Math.PI / 2} />
                <Floor />
            </Suspense>
        </>
    )
}

export default Experience;