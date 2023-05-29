import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: inline-block;

  width: 200px;
  height: 50px;
  padding: 14px 28px;

  background-color: ${prop => (prop.isActive ? '#286507' : '#f8b602')};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 18px;
  line-height: 22px;
  color: ${prop => (prop.isActive ? 'white' : 'black')};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible {
    background-color: #c98348;
  }
`;
