import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class PaymentApi extends AuthenticatedApi {
  reserveTicket(body) {
    return api.post("/payment/ticket-reservation", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
