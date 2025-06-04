import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacantesService {
  private apiUrl = 'http://127.0.0.1:8000/api/PublicarVacante';

  constructor(private http: HttpClient) {}

  crearVacante(vacante: any) {
    const token = localStorage.getItem('authToken') ?? '';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, vacante, { headers });
  }
}
