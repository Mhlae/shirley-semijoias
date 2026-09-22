import { useState } from 'react'
import Header from './components/Header'
import CategoryScroller from './components/CategoryScroller'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import categorias from './data/categorias.json'
import produtos from './data/produtos.json'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState(null)

  const produtosFiltrados = categoriaAtiva
    ? produtos.filter((produto) => produto.categoria === categoriaAtiva)
    : produtos

  return (
    <div className="app" id="inicio">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="app__main">
        <CategoryScroller
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          onSelectCategoria={setCategoriaAtiva}
        />
        <ProductGrid
          produtos={produtosFiltrados}
          searchTerm={searchTerm}
          categoriaAtiva={categoriaAtiva}
          onLimparFiltro={() => setCategoriaAtiva(null)}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
