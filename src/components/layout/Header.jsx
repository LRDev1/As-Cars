function Header(){
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                AS <span>Cars</span>
                </a>

                <nav className="navigation">
                    <a href="/">Comprar carros</a>
                    <a href="/favoritos">Favoritos</a>
                    <a href="/vender">Vender meu carro</a>                    
                </nav>
            </div>
        </header>
    )
}

export default Header