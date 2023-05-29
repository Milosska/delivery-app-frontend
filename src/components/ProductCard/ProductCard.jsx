import { useState } from 'react';
import {
  Container,
  Figure,
  Image,
  FigureText,
  InfoThumb,
  TextLabel,
  AddBtn,
} from './ProductCard.styled';

export const ProductCard = ({
  product: { _id, name, img, cuisine, ingredients, price, type },
  setProductsId,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setProductsId(prevState => [...prevState, _id]);
      setIsActive(true);
    } else {
      setProductsId(prevState => prevState.filter(product => product !== _id));
      setIsActive(false);
    }
  };

  return (
    <Container>
      <Figure>
        <Image src={img} alt={name} width="300px" />
        <FigureText>{name}</FigureText>
      </Figure>
      <InfoThumb>
        <p>
          <TextLabel>Ingredients: </TextLabel>
          {ingredients.length > 0
            ? ingredients.join(', ')
            : 'not indicated by manufactor'}
        </p>
        <p>
          <TextLabel>Cuisine:</TextLabel> {cuisine}
        </p>
        <p>
          <TextLabel>Price:</TextLabel> {price}$
        </p>
      </InfoThumb>
      <AddBtn type="button" onClick={handleClick} isActive={isActive}>
        {isActive ? 'Remove from cart' : 'Add to cart'}
      </AddBtn>
    </Container>
  );
};
