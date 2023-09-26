import { Canvas } from "@react-three/fiber"
import Experience from "./World/Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [0, 2, 5],
        fov: 60
    }

    return (
        <>
            <Info name={"Fabian Valencia"} biography={"Web 3D Developer"} />
            <Canvas
                shadows
                camera={cameraSettings}
            >
                <Experience />
            </Canvas>
        </>
    )
}
export default App