import { Loader } from "@react-three/drei";
import Menu from "./menu/Menu";
import World from "./world/World";
import { Suspense } from "react";

export default function Portfolio() {
  return (
    <Suspense fallback={<Loader />}>
      <Menu />
      <World />
    </Suspense>
  );
}
