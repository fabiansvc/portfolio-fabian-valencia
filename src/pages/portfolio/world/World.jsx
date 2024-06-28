import { Center } from "@react-three/drei";
import { Tree } from "./models/Tree";
import { Hachi } from "./models/Hachi";

export default function World() {
  return (
    <Center position={[0, 0.5, 0]}>
      <Tree />
      <Hachi position={[0.5, 0, 0.5]} />
    </Center>
  );
}
