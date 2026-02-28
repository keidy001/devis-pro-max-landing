import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Demo {
    private apiUrl = '  https://2ad6-2a02-4780-28-b87c-00-1.ngrok-free.app';
  //  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  sendDemoRequest(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateurs/demo`, data);
  }
}
