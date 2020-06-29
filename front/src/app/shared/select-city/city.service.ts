import { Injectable } from "@angular/core";
import { RestService } from "src/app/core/services/rest.service";

@Injectable({
  providedIn: "root",
})
export class CityService {
  constructor(private restService: RestService) {}

  getAll(query: string) {
    let url = `cities${
      undefined != query && null != query && "" != query
        ? `?query=${query}`
        : ``
    }`;
    return this.restService.queryGetRegular(url);
  }
}
