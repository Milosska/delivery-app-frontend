import styled from 'styled-components';
import { StyledBtn } from '../Button/Button.styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 5% 10%;
  border-radius: 20px;
  background-color: #aac76f;
`;

export const FormTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
`;

export const LabelThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: block;

  font-weight: 600;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 10px;

  font-weight: 400;

  :focus,
  :active {
    outline: 3px solid #f8b602;
  }

  :not(:placeholder-shown) {
    border: ${prop => (prop.error ? '3px solid red' : '3px solid green')};
  }
`;

export const InputErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;

export const MakeOrderBtn = styled(StyledBtn)`
  width: 250px;

  font-weight: 600;
  font-size: 22px;
`;
