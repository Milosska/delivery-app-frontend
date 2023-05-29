import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const BigColumn = styled.div`
  flex: 4;
`;

export const SmallColumn = styled.div`
  flex: 1;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
`;
