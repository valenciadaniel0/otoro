import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private service: RestService) { }

  run(body) {

		let url = `users/authenticate`;
		return this.service.queryPostRegular(url, body);
	}
}
