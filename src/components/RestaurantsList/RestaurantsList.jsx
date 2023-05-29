import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { List, ListItem } from '../RestaurantsList/RestaurantsList.styled';
import { fetchProductsByCompany } from '../../helpers/fetchAPI';

export const RestaurantsList = ({ setProducts }) => {
  const [currentShop, setCurrentShop] = useState('McDonalds');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setProducts([]);
      const products = await fetchProductsByCompany(currentShop);
      setProducts(products);
      setIsLoading(false);
    };

    getProducts();
  }, [currentShop, setProducts]);

  const handleClick = async e => {
    setCurrentShop(e.target.innerText);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          <ListItem>
            <Button
              type="button"
              isActive={currentShop === 'McDonalds'}
              onClick={handleClick}
            >
              McDonalds
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="button"
              isActive={currentShop === 'KFC'}
              onClick={handleClick}
            >
              KFC
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="button"
              isActive={currentShop === 'Starbucks'}
              onClick={handleClick}
            >
              Starbucks
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="button"
              isActive={currentShop === "Domino's Pizza"}
              onClick={handleClick}
            >
              Domino's Pizza
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="button"
              isActive={currentShop === 'Subway'}
              onClick={handleClick}
            >
              Subway
            </Button>
          </ListItem>
        </List>
      )}
    </>
  );
};
