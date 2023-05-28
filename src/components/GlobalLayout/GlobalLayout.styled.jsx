import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding: 0 20px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: #f8b602;
`;

export const FooterThumb = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoText = styled(NavLink)`
  font-family: 'LilitaOne';
  color: black;
  font-size: 28px;

  &:hover,
  &:focus {
    color: black;
  }

  &.active {
    color: black;
  }
`;

export const SocialLink = styled.a`
  color: black;

  > svg {
    width: 30px;
    height: 30px;
    transform: scale(1);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #597705;
      transform: scale(1.2);
    }

    &.active {
      color: #597705;
    }
  }
`;
