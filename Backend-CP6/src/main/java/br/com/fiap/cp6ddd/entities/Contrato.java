package br.com.fiap.cp6ddd.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_contrato")
public class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private Double valor;
    private String dataInicio;
    private String dataFim;
    private String status;

    public Contrato() {
    }

    public Contrato(Long id, String descricao, Double valor, String dataInicio, String dataFim, String status) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public Double getValor() { return valor; }
    public void setValor(Double valor) { this.valor = valor; }

    public String getDataInicio() { return dataInicio; }
    public void setDataInicio(String dataInicio) { this.dataInicio = dataInicio; }

    public String getDataFim() { return dataFim; }
    public void setDataFim(String dataFim) { this.dataFim = dataFim; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}