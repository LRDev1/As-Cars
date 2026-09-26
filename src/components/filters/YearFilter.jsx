function YearFilter({ minYear, setMinYear, maxYear, setMaxYear }) {
    return (
        <div className="year-filter">
            <h3>Ano</h3>

            <div className="year-filter-fields">
                <input
                    type="number"
                    placeholder="Ano mínimo"
                    value={minYear}
                    onChange={(event) => setMinYear(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Ano máximo"
                    value={maxYear}
                    onChange={(event) => setMaxYear(event.target.value)}
                />
            </div>
        </div>
    )
}

export default YearFilter