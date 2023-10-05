import { Physics } from "@react-three/rapier";
import Controls from "./Controls/Controls";
import AboutMe from "./Scenes/AboutMe/AboutMe";
import Welcome from "./Scenes/Welcome/Welcome";
import Environments from "./Staging/Environment";
import Lights from "./Staging/Lights";

const Experience = () => {
    return (
        <>
            <Controls />
            <Environments />
            <Lights />
            <Physics
                debug
            // gravity={[0, -1, 0]}
            >
                <Welcome />
                <AboutMe />
            </Physics>

        </>
    )
}

export default Experience;