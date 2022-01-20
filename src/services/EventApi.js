import api from "./api";

export default class EventApi {
  getEventInfo() {
    return api.get("/event");
  }

  getTicketsInfo() {
    return api.get("/event/tickets-data");
  }
}
