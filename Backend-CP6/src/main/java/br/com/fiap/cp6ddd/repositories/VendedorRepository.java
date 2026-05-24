package br.com.fiap.cp6ddd.repositories;

import br.com.fiap.cp6ddd.entities.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendedorRepository extends JpaRepository<Vendedor, Long> {
}