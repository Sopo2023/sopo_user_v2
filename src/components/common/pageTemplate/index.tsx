import { useLocation } from "react-router-dom";
import { ProvidersProps } from "../Provider/type";
import SideBar from "../sidebar/index";
import styled from "styled-components";
import Header from "../header/index";
import Layout from "../layout/layout";

const pageTemplate = ({ children }: ProvidersProps) => {
  const { pathname } = useLocation();

  return (
    <LayoutContainer>
       {pathname !== "/sign" && <Header />}
       {pathname !== "/sign" && <SideBar />}
        <Layout>{children}</Layout>
    </LayoutContainer>
  );
};
export default pageTemplate;

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  user-select: none;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

