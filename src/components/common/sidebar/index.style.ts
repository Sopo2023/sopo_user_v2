import styled, { css } from 'styled-components';

interface MenuItemProps {
  active: boolean;
}

export const SidebarContainer = styled.div`

    width: 250px; 
    background: #f7fff3;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    z-index: 2
`;

export const SideBarWrap = styled.div`
  z-index: 3;
  width: 254px;
  height: 100vh;
  background-color: #f7fff3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 52px;
  padding-top: 48px;
`;

export const SopoLogoImg = styled.img`
  width: 23px;
  height: 32px;
  flex-shrink: 0;
`;

export const MainTitle = styled.span`
  color: #1a9a18;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  padding-left: 17px;
`;

export const Menu = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 98px;
`;

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  width: 187px;
  height: 40px;
  padding: 3px 8px 3px 25px;
  margin-top: 15px;
  align-items: center;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background-color: #1A9A18;
      border-radius: 10px;
      color: #fff;
      & img {
        filter: brightness(0) invert(1);
      }
    `}
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const MenuText = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  padding-left: 8px;
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  padding-left: 47px;
  padding-bottom: 47px;
  cursor: pointer;
`;

export const LogoutIconImg = styled.img`
  width: 15px;
  height: 12px;
`;

export const LogoutText = styled.span`
  color: #828282;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  padding-left: 11px;
`;