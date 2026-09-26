function FilterSidebar({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null
    }

    return (
        <>
            <div
                className="filter-overlay"
                onClick={onClose}
                aria-hidden="true"

            />
            
        <aside className="filter-sidebar is-open">
            <div className="filter-sidebar-header">
                <h2>Filtros de pesquisa</h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar filtros"
                >
                    ×
                </button>
            </div>

            <div className="filter-sidebar-content">
                {children}
            </div>
        </aside>
        </>
    )
}

export default FilterSidebar