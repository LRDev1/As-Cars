import { useState } from 'react'
import CarGrid from '../../components/cars/CarGrid'
import cars from '../../data/cars'
import PriceFilter from '../../components/filters/PriceFilter'

function Cars() {
    const [search, setSearch] = useState('')

    const [minPrice, setMinPrice] = useState('')

    const [maxPrice, setMaxPrice] = useState('')
    
    const filteredCars = cars.filter((car) => {
        const searchTerm = search.toLowerCase()

        const matchesSearch =
            car.brand.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm)

        const matchesMinPrice =
            minPrice === '' || car.price >= Number(minPrice)

        const matchesMaxPrice =
            maxPrice === '' || car.price <= Number(maxPrice)

            return matchesSearch && matchesMinPrice && matchesMaxPrice
    })

    return (
        <main className="cars-page">
            <h1>Carros disponíveis</h1>

            <p>
                Aqui você encontrará uma lista de carros disponíveis para compra. Explore as opções e encontre o veículo que melhor se adapta às suas necessidades e preferências.
            </p>

            <div className="cars-search">
                <input
                    type="text"
                    placeholder="Busque por marca ou modelo"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

            </div>

            <p>
                Encontramos {filteredCars.length} carros disponíveis.
            </p>

            <PriceFilter
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />

            <CarGrid cars={filteredCars} />
        </main>
    )
}

export default Cars