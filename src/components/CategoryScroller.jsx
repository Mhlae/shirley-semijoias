import './CategoryScroller.css'

function CategoryScroller({ categorias, onSelectCategoria }) {
  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 className="section-title" id="categories-title">Categorias</h2>
      <div className="categories__scroll">
        <button
          type="button"
          className="category-card category-card--all"
          onClick={() => onSelectCategoria('TODOS')}
        >
          <span className="category-card__all-label">TODOS</span>
          <span className="category-card__name">Todas as categorias</span>
        </button>
        {categorias.map((categoria) => (
          <button
            type="button"
            className="category-card"
            key={categoria.id}
            onClick={() => onSelectCategoria(categoria.nome)}
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
