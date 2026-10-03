import './Footer.css'
import { NUMERO_WHATSAPP } from '../constants'

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
          <a href={`https://wa.me/${NUMERO_WHATSAPP}`}>WhatsApp: (13) 99733-5930</a>
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
