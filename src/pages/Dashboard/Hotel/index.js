import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";
import Splash from "../../../components/Splash";
import RoomContext from "../../../contexts/RoomContext";
import DetailsRoom from "./DetailsRoom";
import SelectRoom from "./SelectRoom";

export default function Hotel() {
  const [hotelSelected, setHotelSelected] = useState("");
  const [userStatus, setUserStatus] = useState({ allow: false, message: "" });
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [previousRoomId, setPreviousRoomId] = useState(selectedRoom);
  const { userData, setBackUser } = useContext(UserContext);
  const { choosing } = useContext(RoomContext);
  const { user, hotel } = useApi();
  const [hasRoom, setHasRoom] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, [choosing]);

  function getUserInfo() {
    const userId = userData.user.id;
    user.getUserInfo(userId).then((res) => {
      setBackUser(res.data);
      checkUserStatus(res.data);
    });
  }

  function checkUserStatus(userInfo) {
    if (userInfo.roomId !== null && !choosing) {
      setSelectedRoom(userInfo.roomId);
      setHasRoom(true);
      setLoading(false);
      return;
    }

    if (userInfo.status.id === 4 && userInfo.accomodation.id === 2) {
      hotel.getHotels().then(resp => {
        setLoading(false);
        if (resp.data.length === 0) {
          setUserStatus({ ...userStatus, message: "Não há hoteis diponiveis" });
        }
        else {
          setHotels(resp.data);
          setUserStatus({ ...userStatus, allow: true });
        }
      });
    } else if (userInfo.status.id <= 3) {
      setLoading(false);
      setUserStatus({ ...userStatus, message: "Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem" });
    }
    else {
      setLoading(false);
      setUserStatus({ ...userStatus, message: "Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades" });
    }
  }

  if (loading) {
    return (
      <Splash
        loading
        hidePicture
        minHeight="0px"
        background="#FFF"
        loaderColor="#000"
      />
    );
  }

  return (
    <>
      {
        hasRoom ?
          <DetailsRoom setHasRoom={setHasRoom} setLoading={setLoading} />
          :
          <SelectRoom userStatus={userStatus} hotels={hotels} hotelSelected={hotelSelected} setHotelSelected={setHotelSelected} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} previousRoomId={previousRoomId} setPreviousRoomId={setPreviousRoomId} getUserInfo={getUserInfo} setHasRoom={setHasRoom} setLoading={setLoading} />
      }
    </>
  );
}
