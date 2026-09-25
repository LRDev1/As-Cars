import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

function CarCard({ car }) {
  return (
    <article className="car-card">
      <FavoriteButton carId={car.id}/>
      <div className="car-card-image">
        <img src={car.image} alt={`${car.brand} ${car.model}`} />
      </div>

      <div className="car-card-content">
        <span className="car-card-category">
          {car.category}
        </span>

        <h2>
          {car.brand} {car.model}
        </h2>

        <p>{car.version}</p>

        <div className="car-card-details">
          <span>{car.year}</span>
          <span>{car.mileage.toLocaleString('pt-BR')} km</span>
          <span>{car.transmission}</span>
        </div>

        <strong>
          R$ {car.price.toLocaleString('pt-BR')}
        </strong>

        <span className="car-card-location">
          {car.location}
        </span>

        <Link to={`/carros/${car.id}`} className="car-card-button">
          Ver detalhes
        </Link>

      </div>
    </article>
  )
}

export default CarCard