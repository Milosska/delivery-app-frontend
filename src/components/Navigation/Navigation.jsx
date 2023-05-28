import {
  NavBar,
  Container,
  LogoText,
  ListThumb,
  List,
  StyledLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavBar>
      <Container>
        <LogoText to="/">TasteMe</LogoText>
        <ListThumb>
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
          <List>
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
            <li>
              <StyledLink to="/register">Register</StyledLink>
            </li>
          </List>
        </ListThumb>
      </Container>
    </NavBar>
  );
};
