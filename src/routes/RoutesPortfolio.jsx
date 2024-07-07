import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../pages/portfolio/Portfolio";
import PageNotFound from "../pages/page_not_found/PageNotFound";

/**
 * RoutesPortfolio component defines the routing configuration for the portfolio application.
 * It uses React Router's BrowserRouter, Routes, and Route components to handle navigation.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function RoutesPortfolio() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Portfolio page */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Route for handling any other paths not specified */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
