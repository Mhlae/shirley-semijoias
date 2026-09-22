import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="atendimento">
      <div className="footer__inner">
        <div className="footer__col">
          <h2 className="footer__title">Shirley Semijoias</h2>
          <p className="footer__text">Semijoias com qualidade e estilo para você brilhar todos os dias.</p>
        </div>
        <div className="footer__col">
          <h2 className="footer__title">Contato</h2>
          <a href="https://wa.me/5500000000000">WhatsApp: (00) 00000-0000</a>
          <a href="tel:+5500000000000">Telefone: (00) 0000-0000</a>
          <a href="mailto:contato@shirley.com">contato@shirley.com</a>
        </div>
        <div className="footer__col">
          <h2 className="footer__title">Links úteis</h2>
          <a href="#categorias-title">Categorias</a>
          <a href="#produtos">Produtos</a>
          <a href="#atendimento">Fale conosco</a>
        </div>
        <div className="footer__col">
          <h2 className="footer__title">Segurança</h2>
          <div className="footer__ssl" aria-label="Site seguro">▣ <span>Site seguro</span></div>
        </div>
      </div>
      <div className="footer__bottom">© {new Date().getFullYear()} Shirley Semijoias — Todos os direitos reservados.</div>
    </footer>
  )
}

export default Footer
