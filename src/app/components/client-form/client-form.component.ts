import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './index.html', 
})
export class ClientFormComponent {
  client: Client = {
    id: 0, 
    name: '',
    sharedKey: '',
    email: '',
    phoneNumber: '',
  };
  
  errorMessage: string | null = null; // Para manejar mensajes de error

  constructor(private clientService: ClientService, private router: Router) {}

  addClient() {
    this.clientService.addClient(this.client).subscribe(
      () => {
        // Redirigir o mostrar un mensaje de éxito
        this.router.navigate(['/clients']); // Redirige a la lista de clientes
      },
      (error) => {
        console.error('Error al agregar el cliente:', error);
        this.errorMessage = 'Hubo un problema al agregar el cliente. Intenta de nuevo.'; // Mensaje de error
      }
    );
  }
}
