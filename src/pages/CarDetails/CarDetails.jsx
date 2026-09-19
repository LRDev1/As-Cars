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

            <h1>{car.brand} {car.model}</h1>

            <p>Esta é a página de detalhes do veículo.</p>
            </div>
        </main>
    )
}

export default CarDetails