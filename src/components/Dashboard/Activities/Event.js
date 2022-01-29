import styled from "styled-components";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

export default function EventInfos(props) {
  return (
    <>
      <Box>
        <Tittle>Teste</Tittle>
        <PlacesContainer>
          <EventsContainer>
            <Button>
              <Infos>
                <h1>derhgdfh</h1>
                <h2>asdasdas</h2>
              </Infos>
              <Separator></Separator>
              <Availability>
                <IoIosCloseCircleOutline size="16px" color="#CC6666" />
                Esgotado
              </Availability>
            </Button>
          </EventsContainer>
        </PlacesContainer>
      </Box>
      <Box>
        <Tittle>Teste</Tittle>
        <PlacesContainer>
          <EventsContainer>
            <Button>
              <Infos>
                <h1>derhgdfh</h1>
                <h2>asdasdas</h2>
              </Infos>
              <Separator></Separator>
              <Availability>
                <IoIosCloseCircleOutline size="16px" color="#CC6666" />
                Esgotado
              </Availability>
            </Button>
          </EventsContainer>
        </PlacesContainer>
      </Box>
      <Box>
        <Tittle>Teste</Tittle>
        <PlacesContainer>
          <EventsContainer>
            <Button>
              <Infos>
                <h1>derhgdfh</h1>
                <h2>asdasdas</h2>
              </Infos>
              <Separator></Separator>
              <Availability>
                <IoIosCloseCircleOutline size="16px" color="#CC6666" />
                Esgotado
              </Availability>
            </Button>
          </EventsContainer>
        </PlacesContainer>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const PlacesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.p`
  font-size: 17px;
  color: #7b7b7b;
  margin-bottom: 15px;
`;

const EventsContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 90%;
  min-height: 80px;
  margin: 10px 0;
  border: none;
  background-color: #f1f1ff;
  border-radius: 5px;
  display: flex;
  padding: 10px;

  :hover{
    background-color: #d0d0d7;
  }
`;

const Infos = styled.div`
  width: 199px;
  font-size: 12px;
  color: #343434;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: start;

  h1{
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background: #cfcfcf;
  margin: 0 10px;
`;

const Availability = styled.div`
  width: 66px;
  font-size: 9px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
