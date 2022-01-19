import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useState } from "react";

export default function Room() {
  const [selected, setSelected] = useState(false);
  
  function chooseRoom() {
    setSelected(!selected);
  }
  return(
    <>
      <RoomBox>
        <h1>101</h1>
        <Vacant>
          <BsPerson fontSize="25px"
            color={selected? "#8FC549" : "black"}
            onClick={() => chooseRoom()}/>
          <BsPersonFill fontSize="25px"/>
        </Vacant>
          
      </RoomBox>
    </>
  );
}

const RoomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 45px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 15px;
  margin-bottom: 10px;

  h1{
    font-weight: bold;
    font-size: 20px;
    padding-left: 7px;
  }
`;

const Vacant = styled.div`
    display: flex;
    margin-right: 7px;
`;
