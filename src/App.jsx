import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"
import { Loader } from "@react-three/drei"

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