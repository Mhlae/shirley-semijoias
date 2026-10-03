import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#inicio" aria-label="Shirley Semijoias - início">
          <span className="header__brand-name">Shirley</span>
          <span className="header__brand-sub">Semijoias</span>
        </a>
        <label className="header__search">
          <span className="sr-only">Buscar produtos</span>
          <input className="header__search-input" type="search" value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Faça sua busca" />
          <button className="header__search-button" type="button" aria-label="Pesquisar">⌕</button>
        </label>
        <nav className="header__actions" aria-label="Ações da loja">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header
