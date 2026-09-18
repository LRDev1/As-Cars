import CarGrid from '../../components/cars/CarGrid'
import cars from '../../data/cars'

function Cars() {
    return (
        <main className="cars-page">
            <h1>Carros disponíveis</h1>

            <p>
                Aqui você encontrará uma lista de carros disponíveis para compra. Explore as opções e encontre o veículo que melhor se adapta às suas necessidades e preferências.
            </p>

            <p>
                Encontramos {cars.length} carros disponíveis.
            </p>

            <CarGrid cars={cars} />
        </main>
    )
}

export default Cars