import { useState, useEffect } from 'react';
import { RestaurantsList } from '../../components/RestaurantsList/RestaurantsList';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {
  Container,
  BigColumn,
  SmallColumn,
  ProductsList,
} from './RestautantsPage.styled';

import { useGlobal } from '../../GlobalContext';

const RestaurantsPage = () => {
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
                <ProductCard product={product} />
              </li>
            );
          })}
        </ProductsList>
      </BigColumn>
    </Container>
  );
};

export default RestaurantsPage;
