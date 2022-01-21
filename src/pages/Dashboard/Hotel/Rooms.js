import styled from "styled-components";

export default function Rooms(props) {
  const { hotelSelected } = props;

  return (
    <RoomsContainer hidden={hotelSelected !== "" ? false : true}>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <OptionsContainer>
        {hotelSelected}
      </OptionsContainer>
    </RoomsContainer>
  );
};

const RoomsContainer = styled.div`
  display: ${props => props.hotelSelected};
`;

const Subtitle = styled.p`

`;

const OptionsContainer = styled.div`

`;
