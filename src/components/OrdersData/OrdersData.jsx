import { Container, TextLabel } from './OrdersData.styled';

export const OrdersData = ({ order: { _id, total_price } }) => {
  return (
    <Container>
      <div>
        <p>
          <TextLabel>Order id: </TextLabel>
          {_id}
        </p>
        <p>
          <TextLabel>Products:</TextLabel>
        </p>
      </div>
      <div>
        <p>
          <TextLabel>Date:</TextLabel>
        </p>
        <p>
          <TextLabel>Total price: </TextLabel>
          {total_price}$
        </p>
      </div>
    </Container>
  );
};
