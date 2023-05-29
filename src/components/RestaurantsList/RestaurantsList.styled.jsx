import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  > button {
    :active {
      background-color: red;
    }
  }
`;
