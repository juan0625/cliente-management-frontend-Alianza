package com.example.client_management.repository; // Cambiado a client_management

import com.example.client_management.model.Client; // Cambiado a client_management
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class ClientRepository {
    private List<Client> clients = new ArrayList<>(); // Lista en memoria para almacenar clientes

    // Devuelve la lista completa de clientes
    public List<Client> findAll() {
        return clients; // Retorna la lista de clientes
    }

    // Busca un cliente por su clave compartida
    public Optional<Client> findBySharedKey(String sharedKey) {
        return clients.stream()
                      .filter(c -> c.getSharedKey().equals(sharedKey)) // Filtra por clave compartida
                      .findFirst(); // Devuelve el primer cliente encontrado o vacío
    }

    // Guarda un nuevo cliente en la lista
    public void save(Client client) {
        clients.add(client); // Agrega el cliente a la lista
    }
}
