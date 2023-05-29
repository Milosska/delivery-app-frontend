import styled from 'styled-components';
import { StyledBtn } from '../Button/Button.styled';

export const Container = styled.div`
  width: 450px;
  min-height: 250px;
  padding: 20px;

  display: flex;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #286507;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  font-size: 20px;
  line-height: 22px;
  text-align: center;
`;

export const PictureThumb = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
  border: 2px solid #f8b602;
`;

export const FigureText = styled.h3`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
`;

export const InfoThumb = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SettingsThumb = styled.div`
  > p {
    margin-top: 15px;
    color: red;
  }
`;

export const PortionsThumb = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PortionsNumber = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

export const ChangePortionsBtn = styled(StyledBtn)`
  width: 35px;
  height: 35px;
  padding: 2px;
  border-radius: 5px;

  font-size: 20px;

  :disabled {
    background-color: lightgray;
  }
`;

export const TextLabel = styled.span`
  font-weight: 600;
`;

export const RemoveBtn = styled(StyledBtn)`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: red;
    color: white;
  }
`;
