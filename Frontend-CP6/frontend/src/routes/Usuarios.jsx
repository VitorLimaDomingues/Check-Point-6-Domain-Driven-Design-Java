import { useEffect, useState } from "react";
import axios from "axios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  async function buscarUsuarios() {
    const response = await axios.get("http://localhost:8080/usuarios");
    setUsuarios(response.data);
  }

  function alterarCampo(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function salvarUsuario(event) {
    event.preventDefault();

    if (editandoId) {
      await axios.put(`http://localhost:8080/usuarios/${editandoId}`, form);
      setEditandoId(null);
    } else {
      await axios.post("http://localhost:8080/usuarios", form);
    }

    setForm({
      nome: "",
      email: "",
      senha: "",
    });

    buscarUsuarios();
  }

  function editarUsuario(usuario) {
    setEditandoId(usuario.id);

    setForm({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    });
  }

  async function excluirUsuario(id) {
    const confirmar = confirm("Tem certeza que deseja excluir este usuário?");
    if (!confirmar) return;

    await axios.delete(`http://localhost:8080/usuarios/${id}`);
    buscarUsuarios();
  }

  function cancelarEdicao() {
    setEditandoId(null);

    setForm({
      nome: "",
      email: "",
      senha: "",
    });
  }

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-10">
      <section className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Usuários</h1>

        <p className="text-zinc-600 mb-6">
          Cadastrar, listar, atualizar e excluir usuários.
        </p>

        <div className="border border-zinc-200 rounded-xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editandoId ? "Editar Usuário" : "Formulário de Usuário"}
          </h2>

          <form onSubmit={salvarUsuario} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={alterarCampo}
              className="border border-zinc-300 rounded-lg px-4 py-2 md:col-span-2"
              required
            />

            <button
              type="submit"
              className="md:col-span-2 bg-zinc-900 text-white rounded-lg px-4 py-2 font-semibold hover:bg-zinc-700 transition"
            >
              {editandoId ? "Salvar Alterações" : "Cadastrar Usuário"}
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
          <h2 className="text-xl font-semibold mb-4">Lista de Usuários</h2>

          {usuarios.length === 0 ? (
            <p className="text-zinc-500">Nenhum usuário cadastrado.</p>
          ) : (
            <div className="space-y-4">
              {usuarios.map((usuario) => (
                <div
                  key={usuario.id}
                  className="border border-zinc-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <p><strong>ID:</strong> {usuario.id}</p>
                    <p><strong>Nome:</strong> {usuario.nome}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Senha:</strong> ******</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => editarUsuario(usuario)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => excluirUsuario(usuario.id)}
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

export default Usuarios;