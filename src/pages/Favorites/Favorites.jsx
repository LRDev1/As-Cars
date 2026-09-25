import { useContext } from 'react'
import FavoritesContext from '../../context/FavoritesContext'
import cars from '../../data/cars'
import CarGrid from '../../components/cars/CarGrid'

function Favorites() {
    const { favorites } = useContext(FavoritesContext)

    const favoriteCars = cars.filter((car) =>
        favorites.includes(car.id)
    )

    return (
        <main className="favorites-page">
            <h1>Meus favoritos</h1>

            {favoriteCars.length === 0 ? (
                <p>
                    Você ainda não adicionou nenhum carro aos favoritos.
                </p>
            ) : (
                <CarGrid cars={favoriteCars} />
            )}
        </main>
    )
}

export default Favorites