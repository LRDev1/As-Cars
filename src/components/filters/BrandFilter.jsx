function BrandFilter({ brand, setBrand }) {
    return (
        <div className="brand-filter">
            <h3>Marca</h3>

            <select
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
            >
                <option value="">Todas as marcas</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
            </select>
        </div>
    )
}

export default BrandFilter