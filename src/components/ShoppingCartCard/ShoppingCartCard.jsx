import { useState, useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import {
  Container,
  PictureThumb,
  Image,
  FigureText,
  InfoThumb,
  SettingsThumb,
  TextLabel,
  PortionsThumb,
  PortionsNumber,
  ChangePortionsBtn,
  RemoveBtn,
} from './ShoppingCartCard.styled';

export const ShoppingCartCard = ({
  product: { product_data },
  setCurrentOrder,
  setTotal,
}) => {
  const [amount, setAmount] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const { product_id, name, img, price } = product_data[0];

  useEffect(() => {
    amount === 1 ? setIsDisabled(true) : setIsDisabled(false);

    setCurrentOrder(prevState =>
      prevState.map(item =>
        item.product_data[0].product_id === product_id
          ? { ...item, quantity: amount }
          : item
      )
    );
  }, [amount, setCurrentOrder, product_id]);

  const handleIncrement = () => {
    setAmount(prevState => prevState + 1);
    setTotal(prevState => prevState + price);
  };
  const handleDecrement = () => {
    setAmount(prevState => prevState - 1);
    setTotal(prevState => prevState - price);
  };

  const handleDelete = () => {
    setCurrentOrder(prevState =>
      prevState.filter(item => item.product_data[0].product_id !== product_id)
    );
  };

  return (
    <Container>
      <PictureThumb>
        <Image src={img} alt={name} width="300px" />
      </PictureThumb>
      <InfoThumb>
        <SettingsThumb>
          <FigureText>{name}</FigureText>
          <PortionsThumb>
            <ChangePortionsBtn onClick={handleDecrement} disabled={isDisabled}>
              -
            </ChangePortionsBtn>
            <PortionsNumber>{amount}</PortionsNumber>
            <ChangePortionsBtn onClick={handleIncrement}>+</ChangePortionsBtn>
          </PortionsThumb>
          <p>
            <TextLabel>Price:</TextLabel> {price * amount}$
          </p>
        </SettingsThumb>
        <RemoveBtn onClick={handleDelete}>
          <AiFillDelete />
          <p>Remove item</p>
        </RemoveBtn>
      </InfoThumb>
    </Container>
  );
};
