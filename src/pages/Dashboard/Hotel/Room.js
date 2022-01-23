import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { toast } from "react-toastify";

import UserContext from "../../../contexts/UserContext";

export default function Room(props) {
  const { selectedRoom, setSelectedRoom, setPreviousRoomId, thisRoom, clearPreviusRoom } = props;
  const [contentList, setContentList] = useState([]);
  const { backUser } = useContext(UserContext);
  const [color, setColor] = useState("");
  const [innerItemColor, setInnerItemColor] = useState("Black");

  useEffect(() => {
    if (thisRoom.occupation === thisRoom.type.capacity && thisRoom.id !== selectedRoom) {
      setColor("#E9E9E9");
      setInnerItemColor("#8C8C8C");
    }

    if (thisRoom.id === selectedRoom) {
      setColor("#FFEED2");
    } else if (backUser.rooms !== null && thisRoom.id === backUser.rooms.id) {
      setColor("#FFC76C");
    } else if (thisRoom.occupation !== thisRoom.type.capacity) {
      setColor("");
    }

    getContent();
  }, [selectedRoom]);

  function selectRoom() {
    if (thisRoom.type.capacity - thisRoom.occupation <= 0 && thisRoom.id !== selectedRoom) {
      toast("Este quarto já está cheio, favor escolher outro");
    } else {
      if (thisRoom.id === selectedRoom || (backUser.rooms !== null && thisRoom.id === backUser.rooms.id)) {
        toast("Este é o quarto que está reservado para ti");
      }
      else {
        clearPreviusRoom();
        thisRoom.occupation++;
        setSelectedRoom(thisRoom.id);
        setPreviousRoomId(thisRoom.id);
      }
    }
  }

  function getContent() {
    let contentListAux = [];
    for (let i = 1; i <= thisRoom.type.capacity; i++) {
      if (i <= thisRoom.occupation) {
        contentListAux.push(true);
      } else {
        contentListAux.push(false);
      }
    }

    contentListAux.reverse();
    setContentList(contentListAux);
  }

  function defineColor(i) {
    if (i === thisRoom.type.capacity - thisRoom.occupation) {
      if (selectedRoom === thisRoom.id) {
        return ("#FF4791");
      }

      return ("green");
    } else {
      return ("black");
    }
  }

  return (
    <RoomBox innerItemColor={innerItemColor} color={color} onClick={selectRoom}>
      <h1>{thisRoom.number}</h1>
      <Vacant>
        {contentList.map((person, i) => person ? <BsPersonFill key={i} fontSize="25px" color={(thisRoom.id === selectedRoom || (backUser.rooms !== null && backUser.rooms.id === thisRoom.id)) ? defineColor(i) : "black"} /> : <BsPerson key={i} fontSize="25px" />)}
      </Vacant>
    </RoomBox >
  );
}

const RoomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};
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
    color: ${props => props.innerItemColor};
  }
`;

const Vacant = styled.div`
    display: flex;
    margin-right: 7px;
`;
