import { Loader } from "@react-three/drei";
import World from "./world/World";
import { Suspense } from "react";
import Menu from "../../components/menu/Menu";

export default function Portfolio() {
  return (
    <Suspense fallback={<Loader />}>
      <Menu />
      <World />
    </Suspense>
  );
}
