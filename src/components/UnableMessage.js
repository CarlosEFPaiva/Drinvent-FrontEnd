import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function UnableMessage({ children, width = "400px" }) {
  return (
    <StyledTypography width={width} variant="h6" >
      {children} 
    </StyledTypography>

  );
}

const StyledTypography = styled(Typography)`
  width: ${({ width }) => width};
  height: 80px;
  position: absolute;
  top: calc(50% - 80px / 2);
  left: calc(50% + 50px - ${({ width }) => width} / 2);
  text-align: center;
  line-height: 24px !important;
  color: #8E8E8E;
`;
