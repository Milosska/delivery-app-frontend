import { Container, Image, ProductName } from './OrdersProductCard.styled';

export const OrdersProductCard = ({ product: { product_data, quantity } }) => {
  const { name, img } = product_data[0];
  return (
    <Container>
      <Image src={img} alt={name} />
      <div>
        <ProductName>Name: {name}</ProductName>
        <ProductName>Pieces: {quantity}</ProductName>
      </div>
    </Container>
  );
};
