import { useEffect, useState } from "react";
import axios from "axios";

const Contratos = () => {

  const [contratos, setContratos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    descricao: "",
    valor: "",
    dataInicio: "",
    dataFim: "",
    status: "",
  });

  async function buscarContratos() {

    const response = await axios.get(
      "http://localhost:8080/contratos"
    );

    setContratos(response.data);
  }

  function alterarCampo(event) {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function salvarContrato(event) {

    event.preventDefault();

    const dadosContrato = {
      ...form,
      valor: Number(form.valor),
    };

    if (editandoId) {

      await axios.put(
        `http://localhost:8080/contratos/${editandoId}`,
        dadosContrato
      );

      setEditandoId(null);

    } else {

      await axios.post(
        "http://localhost:8080/contratos",
        dadosContrato
      );
    }

    setForm({
      descricao: "",
      valor: "",
      dataInicio: "",
      dataFim: "",
      status: "",
    });

    buscarContratos();
  }

  function editarContrato(contrato) {

    setEditandoId(contrato.id);

    setForm({
      descricao: contrato.descricao,
      valor: contrato.valor,
      dataInicio: contrato.dataInicio,
      dataFim: contrato.dataFim,
      status: contrato.status,
    });
  }

  async function excluirContrato(id) {

    const confirmar = confirm(
      "Tem certeza que deseja excluir este contrato?"
    );

    if (!confirmar) return;

    await axios.delete(
      `http://localhost:8080/contratos/${id}`
    );

    buscarContratos();
  }

  function cancelarEdicao() {

    setEditandoId(null);

    setForm({
      descricao: "",
      valor: "",
      dataInicio: "",
      dataFim: "",
      status: "",
    });
  }

  useEffect(() => {
    buscarContratos();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-10">

      <section className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md">

        <h1 className="text-3xl font-bold text-zinc-900 mb-2">
          Contratos
        </h1>

        <p className="text-zinc-600 mb-6">
          Cadastrar, listar, atualizar e excluir contratos.
        </p>

        <div className="border border-zinc-200 rounded-xl p-4 mb-6">

          <h2 className="text-xl font-semibold mb-4">
            {editandoId ? "Editar Contrato" : "Formulário de Contrato"}
          </h2>

          <form
            onSubmit={salvarContrato}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              name="descricao"
              placeholder="Descrição do serviço contratado"
              value={form.descricao}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <input
              type="number"
              step="0.01"
              name="valor"
              placeholder="Valor do contrato"
              value={form.valor}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <div className="flex flex-col">

              <label className="text-sm font-medium text-zinc-700 mb-1">
                Data de início do contrato
              </label>

              <input
                type="date"
                name="dataInicio"
                value={form.dataInicio}
                onChange={alterarCampo}
                className="border border-zinc-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="flex flex-col">

              <label className="text-sm font-medium text-zinc-700 mb-1">
                Data de encerramento do contrato
              </label>

              <input
                type="date"
                name="dataFim"
                value={form.dataFim}
                onChange={alterarCampo}
                className="border border-zinc-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <select
              name="status"
              value={form.status}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2 md:col-span-2"
              required
            >

              <option value="">
                Selecione o status do contrato
              </option>

              <option value="Ativo">
                Ativo
              </option>

              <option value="Encerrado">
                Encerrado
              </option>

              <option value="Pendente de aprovação">
                Pendente de aprovação
              </option>

            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white rounded-lg px-4 py-2 font-semibold hover:bg-zinc-700 transition"
            >
              {editandoId
                ? "Salvar Alterações"
                : "Cadastrar Contrato"}
            </button>

            {editandoId && (
              <button
                type="button"
                onClick={cancelarEdicao}
                className="md:col-span-2 bg-zinc-200 text-zinc-900 rounded-lg px-4 py-2 font-semibold hover:bg-zinc-300 transition"
              >
                Cancelar edição
              </button>
            )}

          </form>
        </div>

        <div className="border border-zinc-200 rounded-xl p-4">

          <h2 className="text-xl font-semibold mb-4">
            Lista de Contratos
          </h2>

          {contratos.length === 0 ? (

            <p className="text-zinc-500">
              Nenhum contrato cadastrado.
            </p>

          ) : (

            <div className="space-y-4">

              {contratos.map((contrato) => (

                <div
                  key={contrato.id}
                  className="border border-zinc-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >

                  <div>
                    <p><strong>ID:</strong> {contrato.id}</p>

                    <p>
                      <strong>Descrição:</strong>{" "}
                      {contrato.descricao}
                    </p>

                    <p>
                      <strong>Valor:</strong>{" "}
                      R$ {contrato.valor}
                    </p>

                    <p>
                      <strong>Data de início:</strong>{" "}
                      {contrato.dataInicio}
                    </p>

                    <p>
                      <strong>Data de encerramento:</strong>{" "}
                      {contrato.dataFim}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      {contrato.status}
                    </p>
                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() => editarContrato(contrato)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => excluirContrato(contrato.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Excluir
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </section>
    </main>
  );
};

export default Contratos;