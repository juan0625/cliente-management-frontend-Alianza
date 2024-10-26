import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model'; // Importa el modelo desde su archivo

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:4200/api/clients'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Obtener un cliente por su clave compartida
  getClientBySharedKey(sharedKey: string): Observable<Client | null> {
    return this.http.get<Client | null>(`${this.apiUrl}?sharedKey=${sharedKey}`);
  }

  // Agregar un nuevo cliente
  addClient(client: Client): Observable<void> {
    return this.http.post<void>(this.apiUrl, client);
  }
}
