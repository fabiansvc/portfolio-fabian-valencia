import { Loader } from "@react-three/drei";
import World from "./world/World";
import { Suspense } from "react";
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
      <World />
    </Suspense>
  );
}
