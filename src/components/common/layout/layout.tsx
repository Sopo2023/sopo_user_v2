import React, { ReactNode } from 'react';
import SideBar from 'src/components/common/sidebar';
import Header from 'src/components/common/header';
import * as S from "src/components/common/layout/index.style"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <S.LayoutContainer>
          <Header />
          <S.MainContent>
              <SideBar />
              <S.ContentArea>
                  {children}
              </S.ContentArea>
          </S.MainContent>
      </S.LayoutContainer>
  );
};

export default Layout;