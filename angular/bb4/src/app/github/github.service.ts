import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  public loadData(searchText): Observable<any>{
    return this.http.get('https://api.github.com/search/users?q='+ searchText)
    .map(res => res.json());
  }

}
