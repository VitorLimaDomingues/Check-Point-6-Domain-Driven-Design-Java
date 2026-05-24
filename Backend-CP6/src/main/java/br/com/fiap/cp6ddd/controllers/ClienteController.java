package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Cliente;
import br.com.fiap.cp6ddd.repositories.ClienteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin("*")
public class ClienteController {

    private final ClienteRepository repository;

    public ClienteController(ClienteRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Cliente> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @PutMapping("/{id}")
    public Cliente atualizar(@PathVariable Long id, @RequestBody Cliente cliente) {
        cliente.setId(id);
        return repository.save(cliente);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}