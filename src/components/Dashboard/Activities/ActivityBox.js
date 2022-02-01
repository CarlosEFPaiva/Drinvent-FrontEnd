import styled from "styled-components";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { defineGridPosition } from "../../../helpers/TimeHelper";
import { useContext } from "react";
import ActivitiesInfoContext from "../../../contexts/ActivitiesInfoContext";
import useActivity from "../../../hooks/useActivity";

export default function ActivityBox({ event }) {
  const { setLoading } = useContext(ActivitiesInfoContext);
  const { isSubscribed, isClicked, activityOnClick } = useActivity({ event, setLoading });
  const conditionedStyles = [
    { condition: isSubscribed, component: <FaRegCheckCircle size="16px" color="#078632" />, text: "Inscrito", textColor: "#078632" },
    { condition: event.vacancies === 0, component: <IoIosCloseCircleOutline size="16px" color="#CC6666" />, text: "Esgotado", textColor: "#CC6666" },
    { condition: event.vacancies !== 0, component: <BsBoxArrowInRight size="16px" color="#078632" />, text: `${event.vacancies} ${event.vacancies === 1 ? "vaga" : "vagas"}`, textColor: "#078632" },
  ];

  const styles = conditionedStyles.find(({ condition }) => condition === true);
  return (
    <Button
      top={defineGridPosition(event.startTime)}
      bottom={defineGridPosition(event.endTime)}
      disabled={event.vacancies === 0}
      isClicked={isClicked}
      onClick={() => activityOnClick(event.name)}
    >
      <Infos>
        <h1>{event.name}</h1>
        <h2>{event.startTime.slice(0, 5)} - {event.endTime.slice(0, 5)} </h2>
      </Infos>
      <Separator></Separator>
      <Availability color={styles.textColor}>
        {styles.component}
        <p>{styles.text}</p>
      </Availability>
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  grid-row-start: ${({ top }) => top};
  grid-row-end: ${({ bottom }) => bottom};
  border: none;
  cursor: pointer;
  background-color: #f1f1ff;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  filter: ${({ isClicked }) => isClicked ? "brightness(0.9)" : ""};
  
  :hover{
    filter: brightness(0.9);
  }
`;

const Infos = styled.div`
  width: 75%;
  font-size: 12px;
  color: #343434;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: start;

  h1{
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
  }
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background: #cfcfcf;
  margin: 0 10px;
`;

const Availability = styled.div`
  width: 25%;
  font-size: 9px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    margin-top: 3px;
    color: ${({ color }) => color}
  }
`;
