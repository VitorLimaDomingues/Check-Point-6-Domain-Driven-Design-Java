package br.com.fiap.cp6ddd.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_prospectante")
public class Prospectante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String telefone;
    private String areaInteresse;

    public Prospectante() {
    }

    public Prospectante(Long id, String nome, String email, String telefone, String areaInteresse) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.areaInteresse = areaInteresse;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getAreaInteresse() { return areaInteresse; }
    public void setAreaInteresse(String areaInteresse) { this.areaInteresse = areaInteresse; }
}