import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper);

    const pointLightRef = useRef();
    // useHelper(pointLightRef, PointLightHelper, 1, "hotpink");

    const spotLightRef = useRef();
    // useHelper(spotLightRef, SpotLightHelper);

    const hemisphereLightRef = useRef();
    // useHelper(hemisphereLightRef, HemisphereLightHelper);

    useFrame((state, delta) => {
        spotLightRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 1;
        // Estamos en break
    })

    const options = useMemo(()=>{
        return{
            intensitySL: {value: 1000, min:0, max: 1000, step: 1},
            colorSL: {value: "white"},
        }
    })

    const {intensitySL, colorSL} = useControls("Spot Light", options)   

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                ref={directionalLightRef}
                position={[10, 10, 5]}
                intensity={1}
                color={"white"}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-far={32}
                shadow-camera-left={-8}
                shadow-camera-right={8}
                shadow-camera-top={8}
                shadow-camera-bottom={-8}
            />
            <pointLight ref={pointLightRef} position={[0, 4, 2]} intensity={4} color={"red"} />
            <spotLight
                ref={spotLightRef}
                position={[0, 4, 2]}
                angle={Math.PI / 12}
                intensity={intensitySL}
                penumbra={1}
                color={colorSL}
                distance={8}
            />
            <hemisphereLight ref={hemisphereLightRef} intensity={5} color={"red"} />
        </>
    )
}

export default Lights;