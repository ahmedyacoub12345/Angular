import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7073/api"

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services`);

  }
 

  getsubServicesbyServiceId(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerBySerId/${id}`);
  }
  getSubscriptionData():Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscription`)
  }
  addUserSubscription(data: any): Observable<any> {
    
    return this.http.post<any>(`${this.staticData}/UserSubscription`,data)
  }
  serviceDetails(id:any):Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesDetailsById/${id}`)
  }

}
