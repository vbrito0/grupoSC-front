
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8081/cliente-api/cliente';
  private authUrl = 'http://localhost:8081/cliente-api/auth';

  constructor(private http: HttpClient) {}

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, { usuario, senha });
  }  

  criarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/criar`, cliente);
  }

  excluirCliente(cnpj: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/excluir/${cnpj}`);
  }

  buscarClientePorCnpj(cnpj: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cnpj}`);
  }

  listarTodosClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
