function CarCard({ car }) {
  return (
    <article className="car-card">
      <div className="car-card-image">
        <span>Imagem do carro</span>
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
      </div>
    </article>
  )
}

export default CarCard