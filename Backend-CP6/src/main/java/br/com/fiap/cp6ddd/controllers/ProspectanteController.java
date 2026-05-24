package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Prospectante;
import br.com.fiap.cp6ddd.repositories.ProspectanteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prospectantes")
@CrossOrigin("*")
public class ProspectanteController {

    private final ProspectanteRepository repository;

    public ProspectanteController(ProspectanteRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Prospectante> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Prospectante cadastrar(@RequestBody Prospectante prospectante) {
        return repository.save(prospectante);
    }

    @PutMapping("/{id}")
    public Prospectante atualizar(@PathVariable Long id, @RequestBody Prospectante prospectanteAtualizado) {
        Prospectante prospectante = repository.findById(id).orElseThrow();

        prospectante.setNome(prospectanteAtualizado.getNome());
        prospectante.setEmail(prospectanteAtualizado.getEmail());
        prospectante.setTelefone(prospectanteAtualizado.getTelefone());
        prospectante.setAreaInteresse(prospectanteAtualizado.getAreaInteresse());

        return repository.save(prospectante);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}