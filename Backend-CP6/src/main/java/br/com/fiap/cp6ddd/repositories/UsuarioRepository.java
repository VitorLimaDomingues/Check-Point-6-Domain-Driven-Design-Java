package br.com.fiap.cp6ddd.repositories;

import br.com.fiap.cp6ddd.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}