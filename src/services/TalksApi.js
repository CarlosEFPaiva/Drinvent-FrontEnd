import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class TalksApi extends AuthenticatedApi {
  getDates() {
    return api.get("/talks/dates", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getActivitiesByDate(dateId) {
    return api.get(`/talks/events/${dateId}`, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  };

  subscribe(eventId) {
    return api.post("/talks/subscribe", { eventId }, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  };

  unsubscribe(eventId) {
    return api.post("/talks/unsubscribe", { eventId }, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  };

  getActivitiesByUserId() {
    return api.get("/talks/user-talks-info", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  };
}
