import { useState } from 'react'
import CarGrid from '../../components/cars/CarGrid'
import cars from '../../data/cars'
import PriceFilter from '../../components/filters/PriceFilter'
import YearFilter from '../../components/filters/YearFilter'
import FilterSidebar from '../../components/filters/FilterSidebar'
import BrandFilter from '../../components/filters/BrandFilter'
import ModelFilter from '../../components/filters/ModelFilter'

function Cars() {
    const [search, setSearch] = useState('')

    const [minPrice, setMinPrice] = useState('')

    const [maxPrice, setMaxPrice] = useState('')

    const [minYear, setMinYear] = useState('')

    const [maxYear, setMaxYear] = useState('')

    const [brand, setBrand] = useState('')

    const [model, setModel] = useState('')

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    
    const filteredCars = cars.filter((car) => {
        const searchTerm = search.toLowerCase()

        const matchesSearch =
            car.brand.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm)

        const matchesBrand = brand === '' || car.brand === brand

        const matchesModel =
            model === '' || car.model === model

        const matchesMinPrice =
            minPrice === '' || car.price >= Number(minPrice)

        const matchesMaxPrice =
            maxPrice === '' || car.price <= Number(maxPrice)

        const matchesMinYear =
            minYear === '' || car.year >= Number(minYear)

        const matchesMaxYear =
            maxYear === '' || car.year <= Number(maxYear)

            return (
            matchesSearch &&
            matchesBrand && 
            matchesModel &&
            matchesMinPrice && 
            matchesMaxPrice &&
            matchesMinYear &&
            matchesMaxYear
            )
        
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

            <button
                type="button"
                className="filter-toggle-button"
                onClick={() => setIsFilterOpen(true)}
            >
                Filtros
            </button>

            <FilterSidebar
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
            >
                <BrandFilter
                    brand={brand}
                    setBrand={setBrand}
                />

                <ModelFilter
                    model={model}
                    setModel={setModel}
                />

                <PriceFilter
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />

                <YearFilter
                    minYear={minYear}
                    setMinYear={setMinYear}
                    maxYear={maxYear}
                    setMaxYear={setMaxYear}
                />

            </FilterSidebar>


            <CarGrid cars={filteredCars} />
        </main>
    )
}

export default Cars