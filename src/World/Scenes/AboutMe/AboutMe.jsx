import { BallCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import House from "./Models/House";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
    const ballBodyRef = useRef();

    const onHandleSphere = () => {
        ballBodyRef.current.applyImpulse({
            x:0,
            y:2,
            z:0
        }, true)
        // ballBodyRef.current.addTorque({
        //     x:0,
        //     y:0.1,
        //     z:0
        // }, true)

        // ballBodyRef.current.applyTorqueImpulse({
        //     x:2,
        //     y:2,
        //     z:2
        // }, true)


        ballBodyRef.current.addForce({
            x: 1,
            y: 0,
            z: 0
        }, true)
    }

    const onHandleTorus = () => {
        ballBodyRef.current.wakeUp()
    }
        
    const [play, setPlay] = useState(false)
    const [hitSound] = useState(()=>new Audio("assets/sound/hit.wav"))

    useEffect(()=>{
        if(play){
            hitSound.currentTime = 0;
            hitSound.volume = Math.random();
            hitSound.play();
        }
    }, [play])

    useEffect(()=>{
        ballBodyRef.current.sleep()
    }, [])

    return (
        <>
            <House position={[10, 0.25, -5]} />
            <RigidBody
                type={"dynamic"}
                colliders={"cuboid"}
                position={[10, 0.5, -5]}
                rotation-x={-Math.PI / 2}
                // gravityScale={-0.01} 
          
            >
                <mesh scale={0.5} onClick={onHandleTorus}>
                    <torusGeometry args={[1, 0.5, 16, 32]} />
                    <meshLambertMaterial color={"yellow"} />
                    {/* <BallCollider args={[1]}  /> */}
                </mesh>
            </RigidBody>

            <RigidBody 
                ref={ballBodyRef}
                colliders={"ball"} 
                position={[10, 4, -5]} 
                friction={0} 
                restitution={0}
                onCollisionEnter={()=>setPlay(true)}
                onCollisionExit={()=>setPlay(false)}
                >
                <mesh scale={0.5} onClick={onHandleSphere} >
                    <sphereGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </RigidBody>
        </>

    )
}

export default AboutMe;