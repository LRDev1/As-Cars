import { useParams } from 'react-router-dom'
import cars from '../../data/cars'

function CarDetails() {
    const { id } = useParams()

    const car = cars.find((car) => car.id === Number(id))

    if (!car) {
        return (
            <main>
                <h1>Veículo não encontrado</h1>
            </main>
        )
    }

    return (
        <main className="car-details">
            <div className="car-details-container">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />

            <h1>{car.brand} <span>{car.model}</span></h1>

            <p>{car.version}</p>

            <div className="car-details-info">
                <span>{car.year}</span>
                <span>{car.mileage.toLocaleString('pt-BR')} km</span>
                <span>{car.transmission}</span>
                <span>{car.fuel}</span>
            </div>

            <strong className="car-details-price">
                R$ {car.price.toLocaleString('pt-BR')}
            </strong>

            <p className="car-details-location">
                {car.location}
            </p>

            <div className="car-details-panel">
                <h2>Interessado neste veículo?</h2>

                <p>
                    Entre em contato com a AS Cars e agende uma visita para conhecer o veículo pessoalmente. Nossa equipe está pronta para ajudá-lo a encontrar o carro dos seus sonhos.
                </p>

            </div>

            

            <div className="car-details-actions">
            <button type="button">
                Tenho interesse
            </button>

            <button type="button">
                Simular financiamento
            </button>
            </div>

            </div>
        </main>
    )
}

export default CarDetails