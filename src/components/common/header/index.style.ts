import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: flex-end;
  background-color: #f7fff3; 
`;

export const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const AvatarName = styled.span`
  color: var(--Secondly-Color---DarkGray-900, #242424);
  /* Body/Bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
  padding-left: 11px;
`;
export const AvatarProfile = styled.div`
display: flex;
align-items: center;
width: 100px;
height: 50px;
margin-right: 85px;
`