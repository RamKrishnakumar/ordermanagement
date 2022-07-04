import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = environment.apiUrl+'orders/';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(
    public http: HttpClient
  ) { }

  public getOrderlist(urlstring:string):Observable<any>{
    const url =  this.baseUrl+`${urlstring}`;
    return this.http.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }

  public getSpecificOrder(orderId:string,urlstring:string):Observable<any>{
   const url = this.baseUrl+`${urlstring}?orderId=`+ orderId;
   return this.http.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }

  public addNewOrder(body:object,urlstring:string):Observable<any>{
    const url = this.baseUrl+`${urlstring}`;
    return this.http.post(url,body,this.httpOptions).pipe(catchError(this.handleError));
  }

  public deleteOrder(orderId:string,urlstring:string):Observable<any>{
    const url = this.baseUrl+`${urlstring}?orderId=`+ orderId;
    return this.http.get(url,this.httpOptions).pipe(catchError(this.handleError));
   }

  public updateOrder(orderId:string, urlstring: string, body:object):Observable<any>{
    const url = this.baseUrl+`${urlstring}?orderId=`+orderId;
    return this.http.put(url,body,this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
