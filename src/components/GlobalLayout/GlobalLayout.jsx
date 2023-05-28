import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import {
  Container,
  Main,
  FooterContainer,
  LogoText,
  FooterThumb,
  SocialLink,
} from './GlobalLayout.styled';

const GlobalLayout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <footer>
        <FooterContainer>
          <FooterThumb>
            <SocialLink
              href="https://github.com/Milosska"
              rel="noreferrer noopener nofollow"
              target="_blank"
              aria-label="Milosska github"
            >
              <AiFillGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/liudmyla-deinychenko-b98799264/"
              rel="noreferrer noopener nofollow"
              target="_blank"
              aria-label="Milosska LinkedIn"
            >
              <AiFillLinkedin />
            </SocialLink>
            <SocialLink
              href="https://t.me/DeinychenkoLG"
              rel="noreferrer noopener nofollow"
              target="_blank"
              aria-label="Milosska telegram"
            >
              <BsTelegram />
            </SocialLink>
          </FooterThumb>
          <LogoText to="/">TasteMe</LogoText>
        </FooterContainer>
      </footer>
    </Container>
  );
};

export default GlobalLayout;
