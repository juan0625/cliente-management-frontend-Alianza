import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './index.html' // Asegúrate de que la ruta sea correcta según la estructura de tu proyecto
})
export class ClientListComponent implements OnInit {
  clients: Client[] = []; // Especificar el tipo de datos
  searchKey: string = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data; // Asigna la respuesta a clients
      },
      (error) => {
        console.error('Error loading clients:', error); // Manejo de errores
        // Puedes mostrar un mensaje al usuario o manejar el error de otra manera
      }
    );
  }

  search() {
    if (this.searchKey) {
      this.clientService.getClientBySharedKey(this.searchKey).subscribe(
        (client: Client | null) => {
          // Aquí aseguramos que la respuesta es del tipo esperado
          if (client) {
            this.clients = [client]; // Asigna el cliente si existe
          } else {
            this.clients = []; // Si no hay cliente, asigna un array vacío
          }
        },
        (error) => {
          console.error('Error searching client:', error); // Manejo de errores
          // Puedes mostrar un mensaje al usuario o manejar el error de otra manera
        }
      );
    } else {
      this.loadClients(); // Si no hay clave de búsqueda, carga todos los clientes
    }
  }
}

