import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #286507;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  font-size: 18px;
  line-height: 22px;
`;

export const TextLabel = styled.span`
  font-weight: 600;
`;
