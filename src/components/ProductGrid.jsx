import './ProductGrid.css'

function ProductGrid({ produtos, searchTerm, categoriaAtiva, onLimparFiltro }) {
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()
  const produtosVisiveis = produtos.filter((produto) => (
    !normalizedSearch || produto.nome.toLocaleLowerCase().includes(normalizedSearch)
  ))

  return (
    <section className="products" id="produtos" aria-labelledby="products-title">
      <div className="section-heading products__header">
        <div>
          <p className="eyebrow">Seleção Shirley</p>
          <h2 id="products-title">{categoriaAtiva || 'Todos os produtos'}</h2>
        </div>
        <div className="products__controls">
          <span className="product-count">{produtosVisiveis.length} peças</span>
          {categoriaAtiva && (
            <button type="button" className="products__clear-btn" onClick={onLimparFiltro}>
              Ver todos
            </button>
          )}
        </div>
      </div>
      {produtosVisiveis.length > 0 ? (
        <div className="products__grid">
          {produtosVisiveis.map((produto) => (
            <article key={produto.id} className="product-card">
              <div className="product-card__image-wrap">
                <img src={produto.imagem} alt={produto.nome} loading="lazy" />
              </div>
              <h3 className="product-card__name">{produto.nome}</h3>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">⌕</span>
          <h3>Nenhuma peça encontrada</h3>
          <p>Experimente buscar por outro nome.</p>
        </div>
      )}
    </section>
  )
}

export default ProductGrid
