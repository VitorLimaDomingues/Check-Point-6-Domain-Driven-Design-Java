package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Atendente;
import br.com.fiap.cp6ddd.repositories.AtendenteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atendentes")
@CrossOrigin("*")
public class AtendenteController {

    private final AtendenteRepository repository;

    public AtendenteController(AtendenteRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Atendente> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Atendente cadastrar(@RequestBody Atendente atendente) {
        return repository.save(atendente);
    }

    @PutMapping("/{id}")
    public Atendente atualizar(@PathVariable Long id, @RequestBody Atendente atendenteAtualizado) {
        Atendente atendente = repository.findById(id).orElseThrow();

        atendente.setNome(atendenteAtualizado.getNome());
        atendente.setCpf(atendenteAtualizado.getCpf());
        atendente.setEmail(atendenteAtualizado.getEmail());
        atendente.setTelefone(atendenteAtualizado.getTelefone());
        atendente.setTipo(atendenteAtualizado.getTipo());

        return repository.save(atendente);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}