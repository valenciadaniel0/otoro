import { Injectable } from "@angular/core";
import { RestService } from "../core/services/rest.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private service: RestService) {}

  save(body) {
    let url = `posts`;
    return this.service.queryPostRegular(url, body);
  }
}
