function ModelFilter ({model, setModel}) {
    return (
        <div className="model-filter">
            <h3>Modelo</h3>

            <select
                value={model}
                onChange={(event) => setModel(event.target.value)}
            >
                <option value="">Todos os modelos</option>
                <option value="Corolla">Corolla</option>
                <option value="Civic">Civic</option>
                <option value="EcoSport">EcoSport</option>

            </select>
        </div>
    )
}

export default ModelFilter