import './CategoryScroller.css'

function CategoryScroller({ categorias, categoriaAtiva, onSelectCategoria }) {
  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 className="section-title" id="categories-title">Categorias</h2>
      <div className="categories__scroll">
        {categorias.map((categoria) => (
          <button
            type="button"
            className={`category-card ${categoriaAtiva === categoria.nome ? 'category-card--active' : ''}`}
            key={categoria.id}
            onClick={() => onSelectCategoria(categoriaAtiva === categoria.nome ? null : categoria.nome)}
            aria-pressed={categoriaAtiva === categoria.nome}
          >
            <div className="category-card__image-wrap">
              <img src={categoria.imagem} alt={categoria.nome} loading="lazy" />
            </div>
            <span className="category-card__name">{categoria.nome}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryScroller
