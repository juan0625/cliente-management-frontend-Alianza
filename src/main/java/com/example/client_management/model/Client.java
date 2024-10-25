package com.example.client_management.model;


import java.util.Objects;

public class Client {

    private String sharedKey; // Campo para la clave compartida

    // Constructor
    public Client(String sharedKey) {
        this.sharedKey = sharedKey;
    }

    // Método getter para sharedKey
    public String getSharedKey() {
        return sharedKey;
    }

    private Long id;
    private String name;
    private String email;

    // Constructor vacío
    public Client() {}

    // Constructor con todos los atributos
    public Client(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Método equals y hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return Objects.equals(id, client.id) && Objects.equals(name, client.name) && Objects.equals(email, client.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email);
    }

    // Método toString
    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
