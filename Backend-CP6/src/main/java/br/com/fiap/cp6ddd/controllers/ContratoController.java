package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Contrato;
import br.com.fiap.cp6ddd.repositories.ContratoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contratos")
@CrossOrigin("*")
public class ContratoController {

    private final ContratoRepository repository;

    public ContratoController(ContratoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Contrato> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Contrato cadastrar(@RequestBody Contrato contrato) {
        return repository.save(contrato);
    }

    @PutMapping("/{id}")
    public Contrato atualizar(@PathVariable Long id, @RequestBody Contrato contratoAtualizado) {
        Contrato contrato = repository.findById(id).orElseThrow();

        contrato.setDescricao(contratoAtualizado.getDescricao());
        contrato.setValor(contratoAtualizado.getValor());
        contrato.setDataInicio(contratoAtualizado.getDataInicio());
        contrato.setDataFim(contratoAtualizado.getDataFim());
        contrato.setStatus(contratoAtualizado.getStatus());

        return repository.save(contrato);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}