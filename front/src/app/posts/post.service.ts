import { Injectable } from "@angular/core";
import { RestService } from "../core/services/rest.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private service: RestService) {}

  save(body: any, token: string) {
    let url = `posts`;
    return this.service.queryPost(url, body, token);
  }

  getByType(auth: any, type: number) {
    let url = `posts/get-by-type/${type}/${auth.id}`;    
    return this.service.queryGet(url, auth.token);
  }

  search(auth:any,query:string, type: number) {
    let url = `posts/search/${type}${
      undefined != query && null != query && "" != query
        ? `?query=${query}`
        : ``
    }`;    
    return this.service.queryGet(url, auth.token);
  }
}
