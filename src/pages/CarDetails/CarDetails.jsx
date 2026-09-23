import { useState } from 'react'
import { useParams } from 'react-router-dom'
import cars from '../../data/cars'
import CarGallery from '../../components/cars/CarGallery'

function CarDetails() {
    const [showFinancing, setShowFinancing] = useState(false)
    const [financingEntry, setFinancingEntry] = useState('')
    const [financingTerm, setFinancingTerm] = useState(24)


    const { id } = useParams()

    const car = cars.find((car) => car.id === Number(id))

    if (!car) {
        return (
            <main>
                <h1>Veículo não encontrado</h1>
            </main>
        )
    }

    const financedAmount = Math.max(
        car.price - Number(financingEntry || 0),
        0
    )

    const invalidEntry = Number(financingEntry || 0) > car.price

    const monthlyInterestRate = 0.015

    const monthlyPayment =
        financedAmount *
        (
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, financingTerm)
        ) /
        (
            Math.pow(1 + monthlyInterestRate, financingTerm) - 1
        )

    return (
        <main className="car-details">
            <div className="car-details-container">

                <div className="car-details-main">

                    <div className="car-details-image">
                        <CarGallery
                            images={car.images}
                            alt={`${car.brand} ${car.model}`}
                        />

                    </div>

                    <div className="car-details-content">

                        <h1>
                            {car.brand} <span>{car.model}</span>
                        </h1>

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

                        <span className='car-details-availability'>
                            Disponível para visita
                        </span>

                        <div className="car-details-panel">

                            <h2>Interessado neste veículo?</h2>

                            <p>
                                Entre em contato com a AS Cars e agende uma visita
                                para conhecer o veículo pessoalmente. Nossa equipe
                                está pronta para ajudá-lo a encontrar o carro dos
                                seus sonhos.
                            </p>

                            <div className="car-details-actions">

                                <button type="button">
                                    Tenho interesse
                                </button>

                                <button type="button" onClick={() => setShowFinancing(true)}>
                                    Simular financiamento
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <section className="car-details-highlights">

                    <h2>Destaques do veículo</h2>

                    <div className="highlights-grid">

                        <div className="highlight-item">
                            <span>Ano</span>
                            <strong>{car.year}</strong>
                        </div>

                        <div className="highlight-item">
                            <span>Quilometragem</span>
                            <strong>
                                {car.mileage.toLocaleString('pt-BR')} km
                            </strong>
                        </div>

                        <div className="highlight-item">
                            <span>Câmbio</span>
                            <strong>{car.transmission}</strong>
                        </div>

                        <div className="highlight-item">
                            <span>Combustível</span>
                            <strong>{car.fuel}</strong>
                        </div>

                        <div className="highlight-item">
                            <span>Categoria</span>
                            <strong>{car.category}</strong>
                        </div>

                    </div>

                </section>

                <section className='car-details-description'>

                    <h2>Sobre este veículo</h2>

                    <p>
                    Este {car.brand} {car.model} {car.version}, ano {car.year},
                    está disponível na AS Cars. O veículo possui
                    {` ${car.mileage.toLocaleString('pt-BR')} km`} rodados,
                    câmbio {car.transmission.toLowerCase()} e combustível
                    {` ${car.fuel.toLowerCase()}`}.
                    </p>

                    <p>
                        Entre em contato com nossa equipe para conhecer melhor o veículo, tirar suas dúvidas e agendar uma visita.
                    </p>

                </section>

                <section className='car-details-features'>

                    <h2>Principais equipamentos</h2>

                    <div className='features-grid'>

                        <span>Ar-condicionado</span>
                        <span>Direção elétrica</span>
                        <span>Vidros elétricos</span>
                        <span>Travas elétricas</span>
                        <span>Câmera de ré</span>
                        <span>Controle de estabilidade</span>
                        <span>Controle de tração</span>
                        <span>Rodas de liga leve</span>

                    </div>

                </section>

                {showFinancing && (
                    <div className='financing-modal'>

                        <div className="financing-modal-content">

                        <h2>Simular financiamento</h2>

                        <p>
                            Faça uma simulação para este veículo.
                        </p>

                        <div className="financing-field">

                            <label htmlFor="financing-entry">
                                Valor de entrada
                            </label>

                            <input

                            id="financing-entry"
                            type="number"
                            placeholder="Ex: 30000"
                            value={financingEntry}
                            onChange={(event) => setFinancingEntry(event.target.value)}

                            />

                            {invalidEntry && (
                                <p>
                                    A entrada não pode ser maior que o valor do veículo.
                                </p>
                            )}

                        </div>

                        <div className="financing-field">

                            <label htmlFor="financing-term">
                                Prazo de financiamento
                            </label>

                            <select 
                            id="financing-term"
                            value={financingTerm}
                            onChange={(event) => setFinancingTerm(Number(event.target.value))}
                            >
                                <option value="24">24 meses</option>
                                <option value="36">36 meses</option>
                                <option value="48">48 meses</option>
                                <option value="60">60 meses</option>
                            </select>

                            <p>
                                Valor financiado: R$ {financedAmount.toLocaleString('pt-BR')}
                            </p>

                            <p>
                                Parcela estimada: R$ {monthlyPayment.toLocaleString('pt-BR', {
                                    minumumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={() => setShowFinancing(false)}
                        >
                            Fechar
                        </button>

                        </div>
                        
                    </div>
                )}

            </div>
        </main>
    )
}

export default CarDetails