import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class UserApi extends AuthenticatedApi {
  signUp(email, password) {
    return api.post("/users", { email, password });
  }

  getUserInfo(userId) {
    return api.get("/users", {
      headers: {
        ...this.getAuthorizationHeader(),
        id: userId
      }
    });
  }
}
