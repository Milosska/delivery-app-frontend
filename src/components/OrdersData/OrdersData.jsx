import { OrdersProductCard } from '../OrdersProductCard/OrdersProducrCard';
import {
  Container,
  BaseInfoThumb,
  TextLabel,
  OrderInfoThumb,
  OrderDataThumb,
  List,
} from './OrdersData.styled';

export const OrdersData = ({
  order: {
    _id,
    total_price,
    delivery_data: { address },
    products,
  },
}) => {
  return (
    <Container>
      <BaseInfoThumb>
        <OrderInfoThumb>
          <p>
            <TextLabel>Order id: </TextLabel>
            {_id}
          </p>
          <p>
            <TextLabel>Delivery address: </TextLabel>
            {address}
          </p>
        </OrderInfoThumb>
        <OrderDataThumb>
          <p>
            <TextLabel>Date:</TextLabel>
          </p>
          <p>
            <TextLabel>Total price: </TextLabel>
            {total_price}$
          </p>
        </OrderDataThumb>
      </BaseInfoThumb>
      <p>
        <TextLabel>Products:</TextLabel>
      </p>
      <List>
        {products.map(product => {
          return (
            <li key={product.product_data[0].product_id}>
              <OrdersProductCard product={product} />
            </li>
          );
        })}
      </List>
    </Container>
  );
};
