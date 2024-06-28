import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../pages/portfolio/Portfolio";
import PageNotFound from "../pages/page_not_found/PageNotFound";

export default function RoutesPortfolio() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
