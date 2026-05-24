import { useEffect, useState } from "react";
import axios from "axios";

const Atendentes = () => {
  const [atendentes, setAtendentes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    tipo: "",
  });

  async function buscarAtendentes() {
    const response = await axios.get("http://localhost:8080/atendentes");
    setAtendentes(response.data);
  }

  function alterarCampo(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function salvarAtendente(event) {
    event.preventDefault();

    if (editandoId) {
      await axios.put(`http://localhost:8080/atendentes/${editandoId}`, form);
      setEditandoId(null);
    } else {
      await axios.post("http://localhost:8080/atendentes", form);
    }

    setForm({
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      tipo: "",
    });

    buscarAtendentes();
  }

  function editarAtendente(atendente) {
    setEditandoId(atendente.id);

    setForm({
      nome: atendente.nome,
      cpf: atendente.cpf,
      email: atendente.email,
      telefone: atendente.telefone,
      tipo: atendente.tipo,
    });
  }

  async function excluirAtendente(id) {
    const confirmar = confirm("Tem certeza que deseja excluir este atendente?");
    if (!confirmar) return;

    await axios.delete(`http://localhost:8080/atendentes/${id}`);
    buscarAtendentes();
  }

  function cancelarEdicao() {
    setEditandoId(null);

    setForm({
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      tipo: "",
    });
  }

  useEffect(() => {
    buscarAtendentes();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-10">
      <section className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Atendentes</h1>

        <p className="text-zinc-600 mb-6">
          Cadastrar, listar, atualizar e excluir atendentes.
        </p>

        <div className="border border-zinc-200 rounded-xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editandoId ? "Editar Atendente" : "Formulário de Atendente"}
          </h2>

          <form onSubmit={salvarAtendente} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={form.cpf}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            />

            <select
              name="tipo"
              value={form.tipo}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2 md:col-span-2"
              required
            >
              <option value="">Selecione o tipo</option>
              <option value="Auxiliar">Auxiliar</option>
              <option value="Técnico">Técnico</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white rounded-lg px-4 py-2 font-semibold hover:bg-zinc-700 transition"
            >
              {editandoId ? "Salvar Alterações" : "Cadastrar Atendente"}
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
          <h2 className="text-xl font-semibold mb-4">Lista de Atendentes</h2>

          {atendentes.length === 0 ? (
            <p className="text-zinc-500">Nenhum atendente cadastrado.</p>
          ) : (
            <div className="space-y-4">
              {atendentes.map((atendente) => (
                <div
                  key={atendente.id}
                  className="border border-zinc-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <p><strong>ID:</strong> {atendente.id}</p>
                    <p><strong>Nome:</strong> {atendente.nome}</p>
                    <p><strong>CPF:</strong> {atendente.cpf}</p>
                    <p><strong>Email:</strong> {atendente.email}</p>
                    <p><strong>Telefone:</strong> {atendente.telefone}</p>
                    <p><strong>Tipo:</strong> {atendente.tipo}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => editarAtendente(atendente)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => excluirAtendente(atendente.id)}
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

export default Atendentes;