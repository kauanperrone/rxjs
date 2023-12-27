import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoDaBuscaDeLivros } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly apiUrl: string = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  buscarLivros(valorDigitado: string): Observable<ResultadoDaBuscaDeLivros>{
    const params = new HttpParams().append("q", valorDigitado);
    return this.http.get<ResultadoDaBuscaDeLivros>(this.apiUrl, { params });
  }
}
