import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #286507;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  font-size: 18px;
  line-height: 22px;
`;

export const BaseInfoThumb = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderInfoThumb = styled.div`
  > p {
    margin-bottom: 10px;
  }
`;

export const OrderDataThumb = styled.div`
  > p {
    :not(:last-child) {
      margin-bottom: 10px;
    }

    :last-child {
      color: red;
    }
  }
`;

export const TextLabel = styled.span`
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
`;
