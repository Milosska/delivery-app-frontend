import {
  Container,
  BigColumn,
  SmallColumn,
  ProductsList,
} from './ShoppingCartPage.styled';

const ShoppingCartPage = ({ currentOrder }) => {
  return (
    <Container>
      <SmallColumn></SmallColumn>
      <BigColumn>
        <ProductsList>
          {/* {products.map(product => {
            return (
              <li key={product._id}>
                <ProductCard product={product} setProductsId={setProductsId} />
              </li>
            );
          })} */}
        </ProductsList>
      </BigColumn>
    </Container>
  );
};

export default ShoppingCartPage;
