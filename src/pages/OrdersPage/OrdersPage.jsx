import { useState, useEffect } from 'react';
import { fetchOrders } from '../../helpers/fetchAPI';
import { OrdersData } from '../../components/OrdersData/OrdersData';
import { Container, List, SmallColumn, BgThumb } from './OrdersPage.stytled';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      const userOrders = await fetchOrders();
      setOrders(userOrders);
    };
    getUserOrders();
  }, []);

  return (
    <Container>
      <List>
        {orders.map(order => {
          return (
            <li key={order._id}>
              <OrdersData order={order} />
            </li>
          );
        })}
      </List>
      <SmallColumn>
        <BgThumb />
      </SmallColumn>
    </Container>
  );
};

export default OrdersPage;
