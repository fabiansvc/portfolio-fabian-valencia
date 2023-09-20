import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sign(props) {
  const { nodes, materials } = useGLTF("/assets/models/sign/sign.glb");
  const aboutMeRef = useRef();

  const handleSign = (e, type) => {
    // console.log("distance", e.distance); // Distancia entre la cámara y el punto de contacto del rayo.
    // console.log("point", e.point); // Punto de coordenadas en 3D de donde hizo el contacto del rayo en el objeto.
    // console.log("uv", e.uv); // Punto de coordenadas en 2D de donde hizo el contacto el rayo con la geometría.
    // console.log("object", e.object); // Retorna el objeto que fue interceptado.
    // console.log("eventObject", e.eventObject); // Retorna el objeto que escucho el evento.
    // console.log("x", e.x); // Retorna las coordenadas 2D del puntero del mouse en la posición x.
    // console.log("y", event.y); // Retorna las coordenadas 2D del puntero del mouse en la posición y.
    // console.log("shiftKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla shiftKey.
    // console.log("ctrlKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla ctrlKey.
    // console.log("metaKey", e.metaKey); // retorna true si el evento fue realizado presionando la tecla metaKey.
    aboutMeRef.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 50%)`)
  }

  return (

    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign.geometry}
          material={materials.wood}
        />
        <mesh
          ref={aboutMeRef}
          castShadow
          receiveShadow
          geometry={nodes.AboutMe.geometry}
          material={materials.green}
          onClick={(e) => { handleSign(e, "aboutme") }}
          name="aboutMe"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextAboutMe.geometry}
          material={materials.text}
          position={[0.03, 2.23, 0.087]}
          rotation={[1.559, -0.139, -0.088]}
          scale={0.189}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ContactMe.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextContactMe.geometry}
          material={materials.text}
          position={[0.02, 0.95, 0.089]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={0.189}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Projects.geometry}
          material={materials.yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextProjects.geometry}
          material={materials.text}
          position={[0.02, 1.86, 0.092]}
          rotation={[Math.PI / 2, 0, 0.087]}
          scale={0.189}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Skills.geometry}
          material={materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextSkills.geometry}
          material={materials.text}
          position={[0, 1.42, 0.09]}
          rotation={[1.56, 0.122, 0.088]}
          scale={0.189}
        />
      </group>
      {props.children}
    </group>
  );
}
export default Sign;

useGLTF.preload("/assets/models/sign/sign.glb");