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
  const [totalDeliveryOrder, setTotalDeliveryOrder] = useState([]);
  console.log(totalDeliveryOrder);

  useEffect(() => {
    const prices = currentOrder.map(item => item.price);
    setTotal(prices.reduce((prev, elem) => prev + elem, 0));
  }, [currentOrder]);

  return (
    <Container>
      <SmallColumn>
        <OrderForm total={total} />
      </SmallColumn>
      <BigColumn>
        {currentOrder.length > 0 ? (
          <>
            <ProductsList>
              {currentOrder.map(product => {
                return (
                  <li key={product._id}>
                    <ShoppingCartCard
                      product={product}
                      setCurrentOrder={setCurrentOrder}
                      setTotal={setTotal}
                      totalDeliveryOrder={totalDeliveryOrder}
                      setTotalDeliveryOrder={setTotalDeliveryOrder}
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
