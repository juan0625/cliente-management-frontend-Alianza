// src/app/models/client.model.ts
export interface Client {
    id: number;          // ID único del cliente
    name: string;       // Nombre del cliente
    sharedKey: string;  // Clave compartida del cliente
    // Otras propiedades que puedas necesitar
    email?: string;     // Correo electrónico del cliente (opcional)
    phoneNumber?: string; // Número de teléfono del cliente (opcional)
  }
  