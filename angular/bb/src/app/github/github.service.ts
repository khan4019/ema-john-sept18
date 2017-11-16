import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable  } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUsers(): Observable<any>{
    const url = 'https://api.github.com/search/users?q=eric';
    return this.http.get(url).map(res =>{
      return res.json();
    })
  }

}
