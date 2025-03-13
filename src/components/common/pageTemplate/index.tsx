import { Outlet, useLocation } from "react-router-dom";
import { ProvidersProps } from "../providers/type";
import SideBar from "../sidebar/index";
import styled from "styled-components";
import Header from "../header/index";

const PageTemplate = () => {

  return (
    <LayoutContainer>
        <Header />
        <SideBar />
        <Layout>
          <Outlet/>
        </Layout>
    </LayoutContainer>
  );
};
export default PageTemplate;

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  user-select: none;
  background-color: #f7fff3;
  overflow: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

export const Layout = styled.div`
    width: 100%;
    height: 100%;
`


