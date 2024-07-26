import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page";
import Main from "src/pages/main/page";
import Wirte from "src/pages/wirte/page";
import Seniortojunior from "src/pages/seniortojunior/page";
import Portfolio from "src/pages/portfolio/page";
import Competition from "src/pages/competition/page";
import NotFound from "../common/notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/sign" element={<Sign />} />
      <Route path="/" element={<Main />} />
      <Route path="/write" element={<Wirte />} />
      <Route path="/seniortojunior" element={<Seniortojunior />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/competition" element={<Competition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
