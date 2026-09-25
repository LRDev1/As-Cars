import {useState, useEffect} from 'react'
import FavoritesContext from './FavoritesContext'

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('as-cars-favorites')

        return savedFavorites ? JSON.parse(savedFavorites) : []
    })

    const toggleFavorite = (carId) => {
        setFavorites((currentFavorites) => {
            const isFavorite = currentFavorites.includes(carId)

            if (isFavorite) {
                return currentFavorites.filter((id) => id !== carId)
            }

            return [...currentFavorites, carId]
        })
    }

    useEffect(() => {
        localStorage.setItem(
            'as-cars-favorites',
            JSON.stringify(favorites)
        )
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider