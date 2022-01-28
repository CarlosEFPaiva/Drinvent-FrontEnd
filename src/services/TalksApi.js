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
}
