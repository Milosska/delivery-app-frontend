import { useState, useEffect } from 'react';
import {
  Container,
  Figure,
  Image,
  FigureText,
  InfoThumb,
  TextLabel,
  AddBtn,
} from './ProductCard.styled';

export const ProductCard = ({ product, currentOrder, setCurrentOrder }) => {
  const [isActive, setIsActive] = useState(false);
  const { _id, name, img, cuisine, ingredients, price, type } = product;

  useEffect(() => {
    const inCart = currentOrder.find(item => item._id === _id);
    inCart ? setIsActive(true) : setIsActive(false);
  }, [currentOrder, _id]);

  const handleClick = () => {
    if (!isActive) {
      setCurrentOrder(prevState => [...prevState, product]);
      setIsActive(true);
    } else {
      setCurrentOrder(prevState => prevState.filter(item => item._id !== _id));
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
          <TextLabel>Type:</TextLabel> {type}
        </p>
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
