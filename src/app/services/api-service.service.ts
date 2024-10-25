import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://cf-backend-2.onrender.com/api/task';

  constructor(private http: HttpClient) { }


  getTasks(): Observable<any> {
 // Make the HTTP request with the authorization header
    return this.http.get<any>(this.apiUrl);
  }

}