import { StyledBtn } from './Button.styled';

export const Button = ({ children, type, onClick, isActive = false }) => {
  return (
    <StyledBtn type={type} onClick={onClick} isActive={isActive}>
      {children}
    </StyledBtn>
  );
};
