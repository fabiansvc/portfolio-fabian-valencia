import { Center, Float, Text3D } from "@react-three/drei";
import { useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

/**
 * Welcome component renders a 3D text with dynamic color animation and visual effects.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.top - Whether to position the component at the top.
 * @returns {JSX.Element}
 */
export default function Welcome(props) {
  const text = useMemo(
    () => `      Welcome to 
    Fabian's villa`,
    []
  );

  const [hue, setHue] = useState(290);
  const [direction, setDirection] = useState(1);
  const saturation = "100%";
  const lightness = "50%";

  /**
   * Updates hue value over time to animate color.
   *
   * @param {Object} state - Current state.
   * @param {number} delta - Time delta since last frame.
   */
  useFrame((state, delta) => {
    const hueStep = 50 * delta;

    setHue((prevHue) => {
      let nextHue = prevHue + hueStep * direction;
      if (nextHue >= 360) {
        nextHue = 360;
        setDirection(-1);
      } else if (nextHue <= 300) {
        nextHue = 300;
        setDirection(1);
      }
      return nextHue;
    });
  });

  /**
   * Generates a Color object based on current hue, saturation, and lightness.
   *
   * @type {Color}
   */
  const color = useMemo(() => {
    return new Color(`hsl(${hue}, ${saturation}, ${lightness})`);
  }, [hue]);

  return (
    <Center {...props} top>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text3D
          font={"/assets/fonts/Bangers_Regular.json"}
          height={0.4}
          lineHeight={0.5}
          letterSpacing={0.08}
          size={0.25}
        >
          {text}
          <meshPhongMaterial
            color={color}
            emissive={0x0006b3}
            specular={0xffffff}
            shininess={100}
          />
        </Text3D>
      </Float>
    </Center>
  );
}
