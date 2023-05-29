import { Watch } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#286507"
        ariaLabel="watch-loading"
        visible={true}
      />
    </Container>
  );
};
