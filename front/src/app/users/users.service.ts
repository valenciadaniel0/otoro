import { Injectable } from "@angular/core";
import { RestService } from "../core/services/rest.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private service: RestService) {}

  recoverPassword(body: any) {
    let url = `users/recover-password`;
    return this.service.queryPostRegular(url, body);
  }

  register(body: any) {
    let url = `users/register`;
    return this.service.queryPostRegular(url, body);
  }

  update(body: any, token: string) {
    let url = `users`;
    return this.service.queryPut(url, body, token);
  }

  updateRecoverCode(body: any) {
    let url = `users/set-recover-code`;
    return this.service.queryPostRegular(url, body);
  }
}
