import { Injectable } from '@angular/core';
import { RestService } from '../core/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private service:RestService) {  }

  update(body: any, token: string) {
    let url = `users`;
    return this.service.queryPut(url, body, token);
  }
}
