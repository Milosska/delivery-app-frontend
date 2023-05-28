import {
  Container,
  BigColumn,
  SmallColumn,
  BgThumb,
} from './AuthLayout.styled';

export const AuthLayout = ({ children, layout = 'login' }) => {
  return (
    <Container>
      <BigColumn>
        <BgThumb layout={layout} />
      </BigColumn>
      <SmallColumn>{children}</SmallColumn>
    </Container>
  );
};
