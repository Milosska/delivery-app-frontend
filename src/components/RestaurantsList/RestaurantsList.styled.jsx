import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    margin: 0 auto;

    :active {
      background-color: #286507;
      color: white;
    }
  }
`;
