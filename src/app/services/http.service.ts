import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endpoint = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  headers = { 'Content-Type': 'application/json'};
  
  login(body: any){
    return this.http.post(`${this.endpoint}/login`,JSON.stringify(body),{headers: this.headers });
  }

  signin(body: any){
    return this.http.post(`${this.endpoint}/signin`,JSON.stringify(body),{headers: this.headers });
  }


}
