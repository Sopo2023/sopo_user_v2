import React, { ReactNode } from 'react';
import SideBar from 'src/components/common/sidebar';
import Header from 'src/components/common/header';
import * as S from "src/components/layout/index.style"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Container>      
        <SideBar />
          <Header />
          <>{children}</>
    </S.Container>
  );
};

export default Layout;