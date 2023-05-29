import { RestaurantsList } from '../../components/RestaurantsList/RestaurantsList';
import {
  Container,
  TinyColumn,
  BigColumn,
  SmallColumn,
} from './RestautantsPage.styled';

const RestaurantsPage = () => {
  return (
    <Container>
      <TinyColumn>
        <RestaurantsList />
      </TinyColumn>
      <BigColumn>Products</BigColumn>
      <SmallColumn>Current order</SmallColumn>
    </Container>
  );
};

export default RestaurantsPage;
