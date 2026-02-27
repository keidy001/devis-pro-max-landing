import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Demo {
    private apiUrl = 'http://31.97.177.49:9093/api';
  //  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  sendDemoRequest(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateurs/demo`, data);
  }
}
