import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledBtn } from '../Button/Button.styled';

export const NavBar = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background-color: #f8b602;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
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

export const ListThumb = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 30px;
`;

export const List = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #286507;
  }

  &.active {
    color: #286507;
  }
`;

export const SideInfoThumb = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const LogoutBtn = styled(StyledBtn)`
  background-color: #286507;
  width: 150px;
  height: 40px;
  padding: 8px 14px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
`;

export const StyledText = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: black;
`;
