package br.com.fiap.cp6ddd.repositories;

import br.com.fiap.cp6ddd.entities.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContratoRepository extends JpaRepository<Contrato, Long> {
}