function PriceFilter({minPrice, setMinPrice, maxPrice, setMaxPrice}) {
    return (
        <div className="price-filter">
            <h3>Preço</h3>

            <div className="price-filter-fields">

                <input
                    type="number"
                    placeholder="Preço minimo"
                    value={minPrice}
                    onChange={(event) => setMinPrice(event.target.value)}
                    
                />

                <input 
                    type="number"
                    placeholder="Preço maximo"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}

                />

            </div>
        </div>
    )
}

export default PriceFilter