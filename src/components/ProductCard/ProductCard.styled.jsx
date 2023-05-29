import styled from 'styled-components';
import { StyledBtn } from '../Button/Button.styled';

export const Container = styled.div`
  position: relative;
  width: 370px;
  min-height: 500px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #286507;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export const Figure = styled.figure`
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 20px;
  border: 2px solid #f8b602;
`;

export const FigureText = styled.figcaption`
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

export const InfoThumb = styled.div`
  > p {
    text-align: left;
    :not(:last-child) {
      margin-bottom: 15px;
    }
    :last-child {
      color: red;
    }
  }
`;

export const TextLabel = styled.span`
  font-weight: 600;
`;

export const AddBtn = styled(StyledBtn)`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`;
