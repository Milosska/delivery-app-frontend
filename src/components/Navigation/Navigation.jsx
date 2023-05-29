import { useGlobal } from '../../GlobalContext';
import { fetchLogout } from '../../helpers/fetchAPI';

import {
  NavBar,
  Container,
  LogoText,
  ListThumb,
  List,
  StyledLink,
  SideInfoThumb,
  StyledText,
  LogoutBtn,
} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn, name, logOut } = useGlobal();

  const handleClick = async () => {
    const { message } = await fetchLogout();
    if (message === 'Logout success') {
      logOut();
    }
  };

  return (
    <NavBar>
      <Container>
        <LogoText to="/">TasteMe</LogoText>
        <ListThumb>
          {isLoggedIn ? (
            <>
              <List>
                <li>
                  <StyledLink to="/">Restaurants</StyledLink>
                </li>
                <li>
                  <StyledLink to="/cart">Shopping Cart</StyledLink>
                </li>
                <li>
                  <StyledLink to="/orders">Orders</StyledLink>
                </li>
              </List>
              <SideInfoThumb>
                <StyledText>{`Hello, ${name.split(' ')[0]}!`}</StyledText>
                <LogoutBtn onClick={handleClick}>Logout</LogoutBtn>
              </SideInfoThumb>
            </>
          ) : (
            <>
              <div></div>
              <List>
                <li>
                  <StyledLink to="/login">Login</StyledLink>
                </li>
                <li>
                  <StyledLink to="/register">Register</StyledLink>
                </li>
              </List>
            </>
          )}
        </ListThumb>
      </Container>
    </NavBar>
  );
};
