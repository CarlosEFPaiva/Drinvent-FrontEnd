import styled from "styled-components";

export default function HotelOption() {
  return(
    <OptionBox>
      <img src="https://www.i-decoracao.com/Uploads/i-decoracao.com/ImagensGrandes/imagens-hotel-fantasyland.jpg" alt=""/>
      <h1>Nome do Hotel</h1>
      <InfoHotel>
        <h2>Tipos de acomodação:</h2>
        <p>Single e Double</p>
      </InfoHotel>
      <InfoHotel>
        <h2>Tipos de acomodação:</h2>
        <p>15</p>
      </InfoHotel>
    </OptionBox>
  );
}

const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F1F1F1;
  width: 196px;
  height: 264px;
  border-radius: 10px;
  margin-right: 20px;

  img{
    width: 86%;
    border-radius: 5px;
    margin-top: 15px;
    height: 109px;
  }

  h1{
    font-size: 20px;
    color: #343434;
    margin-top: 10px;
  }
`;

const InfoHotel = styled.div`
  width:84%;

  h2{
    font-size: 12px;
    color: #3C3C3C;
    margin-top: 15px;
    font-weight: 700;
  }
  p{
    font-size: 12px;
    font-weight: 400;
    color: #3C3C3C;
    margin-top: 5px;
  }
`;