import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function Button({ isActive, type, onClick, title, price }) {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      <Typography variant="body1">
        {title}
      </Typography>
      <Typography variant="body2">
        {`${type === "hotel" ? "+ " : ""}R$ ${price}`}
      </Typography>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 145px;
  height: 145px;
  margin-right: 24px;
  border: ${({ isActive }) => isActive ? "none" : "1px solid #CECECE"};
  border-radius: 20px;
  background-color: ${({ isActive }) => isActive ? "#FFEED2" : "inherit"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    filter:brightness(${({ isActive }) => isActive ? 0.95 : 0.6});
  }
  &:last-child {
      margin-right: 0px;
  }
  & :last-child {
      color: #898989;
  }
`;
