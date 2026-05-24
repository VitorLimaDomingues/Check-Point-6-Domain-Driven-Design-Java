import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    { titulo: "Clientes", descricao: "Gerenciar cadastro de clientes", rota: "/clientes" },
    { titulo: "Vendedores", descricao: "Gerenciar equipe de vendas", rota: "/vendedores" },
    { titulo: "Atendentes", descricao: "Gerenciar atendimentos e usuários do SAC", rota: "/atendentes" },
    { titulo: "Prospectantes", descricao: "Gerenciar possíveis clientes", rota: "/prospectantes" },
    { titulo: "Usuários", descricao: "Gerenciar usuários do sistema", rota: "/usuarios" },
    { titulo: "Contratos", descricao: "Gerenciar contratos cadastrados", rota: "/contratos" },
  ];

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-10">
      <section className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-zinc-900">
            Sistema de Gestão do Relacionamento com o Cliente
          </h1>

          <p className="text-zinc-600 mt-3 max-w-3xl">
            Interface gráfica para gerenciar as entidades do sistema CRM,
            permitindo cadastrar, listar, atualizar e excluir registros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.titulo}
              to={card.rota}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-zinc-200"
            >
              <h2 className="text-2xl font-semibold text-zinc-900">
                {card.titulo}
              </h2>

              <p className="text-zinc-600 mt-2">
                {card.descricao}
              </p>

              <span className="inline-block mt-6 text-sm font-medium text-cyan-700">
                Acessar módulo →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;