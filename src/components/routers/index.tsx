import { Route, Routes } from "react-router-dom";
import Sign from "src/pages/auth/page";
import Main from "src/pages/main/page";
import Write from "src/pages/wirte/page";
import PorfolioWrite from "src/components/home/portfolio/write/index"
import Seniortojunior from "src/pages/seniortojunior/page";
import Portfolio from "src/pages/portfolio/page";
import Competition from "src/pages/competition/page";
import NotFound from "../common/notfound";
import ProfilePage from "src/pages/profile/page";
const Router = () => {
  return (
    <Routes>
      <Route path="/sign" element={<Sign />} />
      <Route path="/" element={<Main />} />
      
      <Route path="/seniortojunior" element={<Seniortojunior />} />
      <Route path="/seniortojunior/write" element={<Write />} />

      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/write" element={<PorfolioWrite />} />

      <Route path="/competition" element={<Competition />} />
      <Route path="/competition/write" element={<Write />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
