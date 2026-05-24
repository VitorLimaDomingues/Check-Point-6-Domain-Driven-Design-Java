const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-300 py-6">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div>
          <h2 className="text-lg font-semibold text-white">
            CRM Hospital São Rafael
          </h2>

          <p className="text-sm text-zinc-400 mt-1">
            Sistema de Gestão do Relacionamento com o Cliente
          </p>
        </div>

        <div className="text-sm text-zinc-400 text-center md:text-right">
          <p>
            Desenvolvido para o CheckPoint 6 — Domain Driven Design
          </p>

          <p className="mt-1">
            © 2026 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;