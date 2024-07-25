import Sign from "src/pages/auth/index";
import Main from "src/pages/main/page"
import Wirte from "src/pages/wirte/page";
import {  Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Wirte />} />
      </Routes>
    
  );
};

export default Router;
