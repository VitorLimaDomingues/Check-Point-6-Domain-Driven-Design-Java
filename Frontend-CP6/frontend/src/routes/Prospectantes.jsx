import { useEffect, useState } from "react";
import axios from "axios";

const Prospectantes = () => {
  const [prospectantes, setProspectantes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    areaInteresse: "",
  });

  async function buscarProspectantes() {
    const response = await axios.get("http://localhost:8080/prospectantes");
    setProspectantes(response.data);
  }

  function alterarCampo(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function salvarProspectante(event) {
    event.preventDefault();

    if (editandoId) {
      await axios.put(`http://localhost:8080/prospectantes/${editandoId}`, form);
      setEditandoId(null);
    } else {
      await axios.post("http://localhost:8080/prospectantes", form);
    }

    setForm({
      nome: "",
      email: "",
      telefone: "",
      areaInteresse: "",
    });

    buscarProspectantes();
  }

  function editarProspectante(prospectante) {
    setEditandoId(prospectante.id);

    setForm({
      nome: prospectante.nome,
      email: prospectante.email,
      telefone: prospectante.telefone,
      areaInteresse: prospectante.areaInteresse,
    });
  }

  async function excluirProspectante(id) {
    const confirmar = confirm("Tem certeza que deseja excluir este prospectante?");
    if (!confirmar) return;

    await axios.delete(`http://localhost:8080/prospectantes/${id}`);
    buscarProspectantes();
  }

  function cancelarEdicao() {
    setEditandoId(null);

    setForm({
      nome: "",
      email: "",
      telefone: "",
      areaInteresse: "",
    });
  }

  useEffect(() => {
    buscarProspectantes();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-10">
      <section className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Prospectantes</h1>

        <p className="text-zinc-600 mb-6">
          Cadastrar, listar, atualizar e excluir prospectantes.
        </p>

        <div className="border border-zinc-200 rounded-xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editandoId ? "Editar Prospectante" : "Formulário de Prospectante"}
          </h2>

          <form onSubmit={salvarProspectante} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              name="areaInteresse"
              value={form.areaInteresse}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2"
              required
            >
              <option value="">Selecione a área de interesse</option>
              <option value="Estética">Estética</option>
              <option value="Saúde">Saúde</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white rounded-lg px-4 py-2 font-semibold hover:bg-zinc-700 transition"
            >
              {editandoId ? "Salvar Alterações" : "Cadastrar Prospectante"}
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
          <h2 className="text-xl font-semibold mb-4">Lista de Prospectantes</h2>

          {prospectantes.length === 0 ? (
            <p className="text-zinc-500">Nenhum prospectante cadastrado.</p>
          ) : (
            <div className="space-y-4">
              {prospectantes.map((prospectante) => (
                <div
                  key={prospectante.id}
                  className="border border-zinc-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <p><strong>ID:</strong> {prospectante.id}</p>
                    <p><strong>Nome:</strong> {prospectante.nome}</p>
                    <p><strong>Email:</strong> {prospectante.email}</p>
                    <p><strong>Telefone:</strong> {prospectante.telefone}</p>
                    <p><strong>Área de Interesse:</strong> {prospectante.areaInteresse}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => editarProspectante(prospectante)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => excluirProspectante(prospectante.id)}
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

export default Prospectantes;