package br.com.fiap.cp6ddd.repositories;

import br.com.fiap.cp6ddd.entities.Atendente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtendenteRepository extends JpaRepository<Atendente, Long> {
}