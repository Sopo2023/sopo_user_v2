import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from "./index.style";

import SopoLogo from "src/assets/imgs/sidebar/sopo_logo.svg";
import HomeIcon from "src/assets/imgs/sidebar/home.svg";
import MentorIcon from "src/assets/imgs/sidebar/metometi.svg";
import PortfolioIcon from "src/assets/imgs/sidebar/portfolio.svg";
import CompetitionIcon from "src/assets/imgs/sidebar/competition.svg";
import LogoutIcon from "src/assets/imgs/sidebar/logouticon.svg";

const Index = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/main':
        setActiveItem('home');
        break;
      case '/seniortojunior':
        setActiveItem('mentor');
        break;
      case '/portfolio':
        setActiveItem('portfolio');
        break;
      case '/competition':
        setActiveItem('competition');
        break;
      default:
        setActiveItem(null);
        break;
    }
  }, [location.pathname]);

  const handleMenuItemClick = (item: string, path: string) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <S.SideBarWrap>
      <S.MainLogo onClick={() => handleMenuItemClick('home', '/main')}>
        <S.SopoLogoImg src={SopoLogo} alt='error' />
        <S.MainTitle>소포</S.MainTitle>
      </S.MainLogo>
      <S.Menu>
        <S.MenuItem
          active={activeItem === 'home'}
          onClick={() => handleMenuItemClick('home', '/main')}
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
        <S.LogoutText>로그아웃</S.LogoutText>
      </S.Logout>
    </S.SideBarWrap>
  );
};

export default Index;