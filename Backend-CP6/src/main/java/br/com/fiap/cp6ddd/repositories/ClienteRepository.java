package br.com.fiap.cp6ddd.repositories;

import br.com.fiap.cp6ddd.entities.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}