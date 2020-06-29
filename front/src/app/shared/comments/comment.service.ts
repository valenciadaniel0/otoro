import { Injectable } from "@angular/core";
import { RestService } from "src/app/core/services/rest.service";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  constructor(private restService: RestService) {}

  save(body: any, token: string) {
    let url = `comments`;
    return this.restService.queryPost(url, body, token);
  }

  getByType(postId: number, token: string) {
    let url = `comments/get-by-post/${postId}`;
    return this.restService.queryGet(url, token);
  }
}
