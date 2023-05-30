import { useState, useEffect } from 'react';

import { ShoppingCartCard } from '../../components/ShoppingCartCard/ShoppingCartCard';
import { OrderForm } from '../../components/OrderForm/OrderForm';
import {
  Container,
  BigColumn,
  SmallColumn,
  ProductsList,
  MakeOrderThumb,
  TotalText,
  PlaceholderThumb,
  BgThumb,
} from './ShoppingCartPage.styled';

const ShoppingCartPage = ({ currentOrder, setCurrentOrder }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const prices = currentOrder.map(item => item.product_data[0].price);
    setTotal(prices.reduce((prev, elem) => prev + elem, 0));
  }, [currentOrder]);

  return (
    <Container>
      <SmallColumn>
        <OrderForm
          total={total}
          currentOrder={currentOrder}
          setCurrentOrder={setCurrentOrder}
        />
      </SmallColumn>
      <BigColumn>
        {currentOrder.length > 0 ? (
          <>
            <ProductsList>
              {currentOrder.map(product => {
                return (
                  <li key={product.product_data[0].product_id}>
                    <ShoppingCartCard
                      product={product}
                      setCurrentOrder={setCurrentOrder}
                      setTotal={setTotal}
                    />
                  </li>
                );
              })}
            </ProductsList>
            <MakeOrderThumb>
              <TotalText>Total order price: {total}$</TotalText>
            </MakeOrderThumb>
          </>
        ) : (
          <PlaceholderThumb>
            <BgThumb />
          </PlaceholderThumb>
        )}
      </BigColumn>
    </Container>
  );
};

export default ShoppingCartPage;
