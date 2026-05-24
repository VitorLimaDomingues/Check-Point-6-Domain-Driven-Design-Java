package br.com.fiap.cp6ddd.controllers;

import br.com.fiap.cp6ddd.entities.Usuario;
import br.com.fiap.cp6ddd.repositories.UsuarioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    private final UsuarioRepository repository;

    public UsuarioController(UsuarioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Usuario> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }

    @PutMapping("/{id}")
    public Usuario atualizar(@PathVariable Long id, @RequestBody Usuario usuarioAtualizado) {
        Usuario usuario = repository.findById(id).orElseThrow();

        usuario.setNome(usuarioAtualizado.getNome());
        usuario.setEmail(usuarioAtualizado.getEmail());
        usuario.setSenha(usuarioAtualizado.getSenha());

        return repository.save(usuario);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}