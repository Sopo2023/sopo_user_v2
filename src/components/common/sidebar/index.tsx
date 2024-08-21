import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./index.style";
import useSidebar from 'src/hooks/sidebar/useSidebar';
import SopoLogo from "src/assets/imgs/sidebar/sopo_logo.svg";
import HomeIcon from "src/assets/imgs/sidebar/home.svg";
import MentorIcon from "src/assets/imgs/sidebar/metometi.svg";
import PortfolioIcon from "src/assets/imgs/sidebar/portfolio.svg";
import CompetitionIcon from "src/assets/imgs/sidebar/competition.svg";
import LogoutIcon from "src/assets/imgs/sidebar/logouticon.svg";
import useLogout from 'src/hooks/auth/useLogout';

const Index = () => {
  const navigate = useNavigate();
  const activeItem = useSidebar();
  const { logOut } = useLogout();
  const handleMenuItemClick = (item: string, path: string) => {
    navigate(path);
  };

  return (
    <S.SidebarContainer>
      <S.SideBarWrap>
        <S.MainLogo onClick={() => handleMenuItemClick('home', '/')}>
          <S.SopoLogoImg src={SopoLogo} alt='error' />
          <S.MainTitle>소포</S.MainTitle>
        </S.MainLogo>
        <S.Menu>
          <S.MenuItem
            active={activeItem === 'home'}
            onClick={() => handleMenuItemClick('home', '/')}
          >
            <S.MenuIcon src={HomeIcon} alt='error' />
            <S.MenuText>홈</S.MenuText>
          </S.MenuItem>
          <S.MenuItem
            active={activeItem === 'mentor'}
            onClick={() => handleMenuItemClick('mentor', '/seniortojunior')}
          >
            <S.MenuIcon src={MentorIcon} alt='error' />
            <S.MenuText>선배가 후배에게</S.MenuText>
          </S.MenuItem>
          <S.MenuItem
            active={activeItem === 'portfolio'}
            onClick={() => handleMenuItemClick('portfolio', '/portfolio')}
          >
            <S.MenuIcon src={PortfolioIcon} alt='error' />
            <S.MenuText>포트폴리오</S.MenuText>
          </S.MenuItem>
          <S.MenuItem
            active={activeItem === 'competition'}
            onClick={() => handleMenuItemClick('competition', '/competition')}
          >
            <S.MenuIcon src={CompetitionIcon} alt='error' />
            <S.MenuText>대회</S.MenuText>
          </S.MenuItem>
        </S.Menu>
        <S.Logout>
          <S.LogoutIconImg src={LogoutIcon} alt='error' />
          <S.LogoutText onClick={logOut}>로그아웃</S.LogoutText>
        </S.Logout>
      </S.SideBarWrap>
    </S.SidebarContainer>
  );
};

export default Index;