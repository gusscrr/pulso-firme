import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-footer">
            <img src="/img/WhatsApp Image 2026-04-14 at 08.31.45.jpeg" alt="Logo PulsoFirme" />
            <h2>PulsoFirme</h2>
          </div>

          <p>Tecnología que transforma vidas. Únete a la revolución que impulsa la inclusión, el aprendizaje y la oportunidad.</p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/pulsofirme26?igsh=ZGFpMmM1Y2p5eWhy" className="social-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@PulsoFirmeArg" className="social-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=holapulsofirme.arg@gmail.com" className="social-icon" target="_blank" rel="noreferrer">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

        <div className="footer-column nav-col">
          <h3>Navegación</h3>
          <ul className="footer-list">
            <li><Link to="/">Inicio <i className="bi bi-chevron-right"></i></Link></li>
            <li><Link to="/experiencia">Experiencia <i className="bi bi-chevron-right"></i></Link></li>
            <li><Link to="/sobre-nosotros">Nosotros <i className="bi bi-chevron-right"></i></Link></li>
            <li><Link to="/analisis">Analisis <i className="bi bi-chevron-right"></i></Link></li>
            <li><Link to="/contacto">Contacto <i className="bi bi-chevron-right"></i></Link></li>
          </ul>
        </div>

        <div className="footer-column con-col">
          <h3>Contacto</h3>
          <div className="contact-item">
            <div className="contact-icon-box"><i className="bi bi-envelope"></i></div>
            <p>holapulsofirme.arg@gmail.com</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box"><i className="bi bi-geo-alt"></i></div>
            <p>Argentina<br /><span style={{ fontSize: '0.85rem', color: '#5c5e60' }}>América Latina</span></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PulsoFirme. Todos los derechos reservados.</p>
        <span className="footer-bottom-dot">•</span>
        <Link to="/terminos-y-condiciones" className="footer-legal-link">Términos y Condiciones</Link>
      </div>
    </footer>
  )
}

export default Footer