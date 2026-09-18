function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">AS CARS</span>

          <h1>
            Encontre o carro
            <br />
            ideal para você.
          </h1>

          <p>
            Pesquise entre veículos selecionados e encontre o próximo carro
            para sua história.
          </p>

          <div className="hero-search">
            <input
              type="text"
              placeholder="Digite marca, modelo ou palavra-chave"
            />

            <button type="button">
              Buscar carros
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home