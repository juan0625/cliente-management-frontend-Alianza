package com.example.client_management.service;

import com.example.client_management.model.Client; 
import com.example.client_management.repository.ClientRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository; // Inyección del repositorio

    // Obtener todos los clientes
    public List<Client> getAllClients() {
        return clientRepository.findAll(); // Llama a findAll en el repositorio
    }

    // Obtener un cliente por su clave compartida
    public Optional<Client> getClientBySharedKey(String sharedKey) {
        return clientRepository.findBySharedKey(sharedKey); // Llama a findBySharedKey en el repositorio
    }

    // Agregar un nuevo cliente
    public void addClient(Client client) {
        clientRepository.save(client); // Guarda el cliente en el repositorio
    }
}
