import { Loader } from "@react-three/drei";
import World from "./world/World";
import { Suspense } from "react";
import Back from "../../components/back/Back";

/**
 * Portfolio component renders a Three.js scene for displaying a portfolio.
 * It includes a loading fallback using Suspense and Loader components.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Portfolio() {
  return (
    <Suspense fallback={<Loader />}>
      <Back />
      <World />
    </Suspense>
  );
}
