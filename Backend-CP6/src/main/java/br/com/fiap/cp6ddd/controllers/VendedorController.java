package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Vendedor;
import br.com.fiap.cp6ddd.repositories.VendedorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendedores")
@CrossOrigin("*")
public class VendedorController {

    private final VendedorRepository repository;

    public VendedorController(VendedorRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Vendedor> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Vendedor cadastrar(@RequestBody Vendedor vendedor) {
        return repository.save(vendedor);
    }

    @PutMapping("/{id}")
    public Vendedor atualizar(@PathVariable Long id, @RequestBody Vendedor vendedorAtualizado) {
        Vendedor vendedor = repository.findById(id).orElseThrow();

        vendedor.setNome(vendedorAtualizado.getNome());
        vendedor.setCpf(vendedorAtualizado.getCpf());
        vendedor.setEmail(vendedorAtualizado.getEmail());
        vendedor.setTelefone(vendedorAtualizado.getTelefone());
        vendedor.setQualificacao(vendedorAtualizado.getQualificacao());

        return repository.save(vendedor);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}