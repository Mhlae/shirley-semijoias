import { useState } from 'react'
import Header from './components/Header'
import CategoryScroller from './components/CategoryScroller'
import ProductGrid from './components/ProductGrid'
import PurchaseBar from './components/PurchaseBar'
import Footer from './components/Footer'
import categorias from './data/categorias.json'
import produtos from './data/produtos.json'
import { NUMERO_WHATSAPP } from './constants'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState(null)
  const [produtosSelecionados, setProdutosSelecionados] = useState(() => new Set())

  const alternarSelecao = (produtoId) => {
    setProdutosSelecionados((selecionados) => {
      const atualizados = new Set(selecionados)
      if (atualizados.has(produtoId)) {
        atualizados.delete(produtoId)
      } else {
        atualizados.add(produtoId)
      }
      return atualizados
    })
  }

  const enviarParaWhatsApp = () => {
    const itens = produtos.filter((produto) => produtosSelecionados.has(produto.id))
    if (itens.length === 0) return

    const mensagem = [
      'Olá! Tenho interesse nos seguintes produtos:',
      '',
      ...itens.flatMap((produto) => [`• ${produto.nome}`, produto.imagem, '']),
      'Aguardo o retorno. Obrigado!',
    ].join('\n')
    const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`
    window.open(link, '_blank')
  }

  const produtosFiltrados = categoriaAtiva && categoriaAtiva !== 'TODOS'
    ? produtos.filter((produto) => produto.categoria === categoriaAtiva)
    : produtos

  return (
    <div className="app" id="inicio">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="app__main">
        {categoriaAtiva ? (
          <ProductGrid
            produtos={produtosFiltrados}
            searchTerm={searchTerm}
            categoriaAtiva={categoriaAtiva === 'TODOS' ? null : categoriaAtiva}
            onVoltar={() => setCategoriaAtiva(null)}
            produtosSelecionados={produtosSelecionados}
            onAlternarSelecao={alternarSelecao}
          />
        ) : (
          <CategoryScroller
            categorias={categorias}
            onSelectCategoria={setCategoriaAtiva}
          />
        )}
      </main>
      <PurchaseBar
        quantidade={produtosSelecionados.size}
        onComprar={enviarParaWhatsApp}
      />
      <Footer />
    </div>
  )
}

export default App
