import './PurchaseBar.css'

function PurchaseBar({ quantidade, onComprar }) {
  const descricaoQuantidade = `${quantidade} ${quantidade === 1 ? 'item selecionado' : 'itens selecionados'}`

  return (
    <aside className="purchase-bar" aria-label="Produtos selecionados">
      <span className="purchase-bar__count" aria-live="polite">{descricaoQuantidade}</span>
      <button
        className="purchase-bar__button"
        type="button"
        disabled={quantidade === 0}
        onClick={onComprar}
      >
        Comprar ({quantidade})
      </button>
    </aside>
  )
}

export default PurchaseBar