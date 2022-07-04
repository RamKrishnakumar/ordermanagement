import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from "rxjs/operators";

import {environment} from "../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.apiUrl+'users/';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(
    public http: HttpClient
  ) { }

  login(body:any) {
    return this.http
      .post<any>(this.baseUrl + "user-login", body)
      .pipe(
        map(data => {
          if (data.success) {
            //do some action
            localStorage.setItem("IsLogin", "true")
          }
          return data
        })
      )
  }

  public loginUser(body:object,urlstring:string){
    const url=this.baseUrl+`${urlstring}`;
    return this.http.post(url,body,this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
