import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  public loadUsers(searchText: string): Observable<any>{
    return this.http.get('https://api.github.com/search/users?q='+searchText).map(res=>res.json());
  }

}
