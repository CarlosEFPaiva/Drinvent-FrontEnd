import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class RoomApi extends AuthenticatedApi {
  saveRoom(selectedRoom, userId) {
    return api.post("/save-room", { selectedRoom, userId }, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
