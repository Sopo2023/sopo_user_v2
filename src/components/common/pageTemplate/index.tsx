import { useLocation } from "react-router-dom";
import { ProvidersProps } from "../providers/type";
import SideBar from "../sidebar/index";
import styled from "styled-components";
import Header from "../header/index";
import Layout from "../layout/layout";
import useExceptionHandling from "src/constants/exceptionHandling/constants"

const pageTemplate = ({ children }: ProvidersProps) => {
  const exceptionHandling = useExceptionHandling();
  return (
    <LayoutContainer>
       {exceptionHandling && <Header />}
       {exceptionHandling && <SideBar />}
        <Layout>{children}</Layout>
    </LayoutContainer>
  );
};
export default pageTemplate;

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

