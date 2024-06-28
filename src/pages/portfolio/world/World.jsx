import { Tree } from "./models_3d/Tree";
import { Fences } from "./models_3d/Fences";
import { Floor } from "./models_3d/Floor";
import { Sign } from "./models_3d/Sign";
import { Dog } from "./models_3d/Dog";
import { Fragment } from "react";

export default function World() {
  return (
    <Fragment>
      <Floor />
      <Fences />
      <Tree />
      <Sign />
      <Dog position-x={1.5} rotation-y={- Math.PI * 0.1} />
    </Fragment>
  );
}
