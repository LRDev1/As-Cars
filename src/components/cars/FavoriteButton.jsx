import {useContext} from 'react'
import FavoritesContext from '../../context/FavoritesContext'

function FavoriteButton({carId}) {
    const {favorites, toggleFavorite} = useContext(FavoritesContext)

    const isFavorite = favorites.includes(carId)

    return (
        <button
        type="button"
        className="favorite-button"
        onClick={() => toggleFavorite(carId)}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}

        >
            {isFavorite ? '♥' : '♡'}
        </button>
    )
}

export default FavoriteButton