package com.example.client_management.controller;

import com.example.client_management.model.Client;
import com.example.client_management.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {
    
    @Autowired
    private ClientService clientService;

    // Obtener todos los clientes
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    // Obtener cliente por clave compartida
    @GetMapping("/{sharedKey}")
    public Optional<Client> getClientBySharedKey(@PathVariable String sharedKey) {
        return clientService.getClientBySharedKey(sharedKey);
    }

    // Agregar un nuevo cliente
    @PostMapping
    public void addClient(@RequestBody Client client) {
        clientService.addClient(client);
    }
}
