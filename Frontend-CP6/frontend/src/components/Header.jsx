import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-zinc-900 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">
          CRM Hospital São Rafael
        </h1>

        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/clientes"
                className="hover:text-cyan-400 transition"
              >
                Clientes
              </Link>
            </li>

            <li>
              <Link
                to="/vendedores"
                className="hover:text-cyan-400 transition"
              >
                Vendedores
              </Link>
            </li>

            <li>
              <Link
                to="/atendentes"
                className="hover:text-cyan-400 transition"
              >
                Atendentes
              </Link>
            </li>

            <li>
              <Link
                to="/prospectantes"
                className="hover:text-cyan-400 transition"
              >
                Prospectantes
              </Link>
            </li>

            <li>
              <Link
                to="/usuarios"
                className="hover:text-cyan-400 transition"
              >
                Usuários
              </Link>
            </li>

            <li>
              <Link
                to="/contratos"
                className="hover:text-cyan-400 transition"
              >
                Contratos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;