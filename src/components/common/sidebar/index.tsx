import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./index.style";
import useSidebar from 'src/hooks/sidebar/useSidebar';
import useLogout from 'src/hooks/auth/useLogout';
import SopoLogo from "src/assets/imgs/sidebar/sopo_logo.svg";
import HomeIcon from "src/assets/imgs/sidebar/home.svg";
import MentorIcon from "src/assets/imgs/sidebar/metometi.svg";
import PortfolioIcon from "src/assets/imgs/sidebar/portfolio.svg";
import CompetitionIcon from "src/assets/imgs/sidebar/competition.svg";
import LogoutIcon from "src/assets/imgs/sidebar/logouticon.svg";

interface MenuItem {
  id: string;
  path: string;
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { id: 'home', path: '/', icon: HomeIcon, text: '홈' },
  { id: 'mentor', path: '/seniortojunior', icon: MentorIcon, text: '선배가 후배에게' },
  { id: 'portfolio', path: '/portfolio', icon: PortfolioIcon, text: '포트폴리오' },
  { id: 'competition', path: '/competition', icon: CompetitionIcon, text: '대회' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const activeItem = useSidebar();
  const { logOut } = useLogout();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <S.SidebarContainer>
      <S.SideBarWrap>
        <S.MainLogo onClick={() => handleMenuItemClick('/')}>
          <S.SopoLogoImg src={SopoLogo} alt="소포 로고" />
          <S.MainTitle>소포</S.MainTitle>
        </S.MainLogo>
        
        <S.Menu>
          {menuItems.map((item) => (
            <S.MenuItem
              key={item.id}
              active={activeItem === item.id}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <S.MenuIcon src={item.icon} alt={`${item.text} 아이콘`} />
              <S.MenuText>{item.text}</S.MenuText>
            </S.MenuItem>
          ))}
        </S.Menu>
        
        <S.Logout onClick={handleLogout}>
          <S.LogoutIconImg src={LogoutIcon} alt="로그아웃 아이콘" />
          <S.LogoutText>로그아웃</S.LogoutText>
        </S.Logout>
      </S.SideBarWrap>
    </S.SidebarContainer>
  );
};

export default Sidebar;