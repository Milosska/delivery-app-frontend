import { StyledBtn } from './Button.styled';

export const Button = ({ children, type, onClick, color }) => {
  return (
    <StyledBtn type={type} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};
