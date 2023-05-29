import { useState } from 'react';
import { RestaurantsList } from '../../components/RestaurantsList/RestaurantsList';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {
  Container,
  BigColumn,
  SmallColumn,
  ProductsList,
} from './RestautantsPage.styled';

const RestaurantsPage = ({ setProductsId }) => {
  const [products, setProducts] = useState([]);

  return (
    <Container>
      <SmallColumn>
        <RestaurantsList setProducts={setProducts} />
      </SmallColumn>
      <BigColumn>
        <ProductsList>
          {products.map(product => {
            return (
              <li key={product._id}>
                <ProductCard product={product} setProductsId={setProductsId} />
              </li>
            );
          })}
        </ProductsList>
      </BigColumn>
    </Container>
  );
};

export default RestaurantsPage;
