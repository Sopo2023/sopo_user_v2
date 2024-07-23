
// import Updown from "src/Components/Updown/updownmain";
import Login from "src/pages/auth/login/page";
// import Portfolio from "src/Components/Portfolio/portfolioMain";
// import Main from "src/Pages/MainPage/mainpage";
// import Write from "src/Components/Sidewrite/write";
// import Signup from "src/Components/Auth/Signup/signup";
// import Mypage from "src/Components/Mypage/mypage";
// import Competition from "src/Components/Competition/Competition";
// import Portfoliosub from "src/Components/Portfoliosub/portfolioSub";
// import CompetitionSub from "src/Components/compsub/competitionsub";
import Main from "src/pages/main/page"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Mentor-Mentee" element={<Updown />} />
        <Route path="/sidewrite" element={<Write />} />
        <Route path="/Signuppage" element={<Signup />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Competition" element={<Competition />} />
        <Route path="/52562893" element={<Portfoliosub />} />
        <Route path="/CompetitionSub" element={<CompetitionSub />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;