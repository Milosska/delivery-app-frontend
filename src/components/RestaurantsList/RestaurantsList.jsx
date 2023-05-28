import { Button } from '../Button/Button';
import { List, ListItem } from '../RestaurantsList/RestaurantsList.styled';

export const RestaurantsList = () => {
  return (
    <List>
      <ListItem>
        <Button type="button">McDonalds</Button>
      </ListItem>
      <ListItem>
        <Button type="button">KFC</Button>
      </ListItem>
      <ListItem>
        <Button type="button">Starbucks</Button>
      </ListItem>
      <ListItem>
        <Button type="button">Domino's pizza</Button>
      </ListItem>
      <ListItem>
        <Button type="button">Subway</Button>
      </ListItem>
    </List>
  );
};
