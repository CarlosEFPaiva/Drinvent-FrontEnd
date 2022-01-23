import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import OptionButton from "./Button";

export default function OptionMenu({ title, options, optionDescription }) {
  return (
    <>
      <StyledSubtitle variant="h6">
        {title}
      </StyledSubtitle>
      <ButtonsWrapper>
        {options.map(({ id, name, price }) => (
          <OptionButton
            key={`${optionDescription} Option ${id}`}
            isActive={id === 1}
            title={name}
            price={Number(price)}
          />
        ))}
      </ButtonsWrapper>
    </>
  );
}

const StyledSubtitle = styled(Typography)`
  margin: 24px 0px 12px !important;
  color: #8E8E8E;
  & b {
    font-weight: 700;
  }
`;

const ButtonsWrapper = styled.div`
    display: flex;
`;
