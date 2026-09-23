import { useState } from "react"

function CarGallery({ images = [], alt}) {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className="car-gallery">

            <div className="car-gallery-main">
                <img
                    src={images[currentImage]}
                    alt={alt}
                />


                <button
                    type="button"
                    className="car-gallery-arrow car-gallery-arrow-left"
                    onClick={() => {
                        setCurrentImage(
                            currentImage === 0
                            ? images.length - 1
                            : currentImage - 1
                        )
                    }}
                >
                    ←
                </button>

                <button
                    type="button"
                    className="car-gallery-arrow car-gallery-arrow-right"
                    onClick={() => {
                        setCurrentImage(
                            currentImage === images.length - 1
                            ? 0
                            : currentImage + 1
                        )
                    }}
                >
                    →
                </button>
            </div>

            <div className="car-gallery-thumbnails">

        <button

        type="button"
        className={`car-gallery-thumbnail ${currentImage === 0 ? 'active' : ''}`}
        onClick={() => setCurrentImage(0)}
    
        >

        <img src={images[0]} alt={alt} />
    
        </button>

        <button

        type="button"
        className={`car-gallery-thumbnail ${currentImage === 1 ? 'active' : ''}`}
        onClick={() => setCurrentImage(1)}
    
        >
        
        <img src={images[1]} alt={alt} />
    
        </button>

        <button

        type="button"
        className={`car-gallery-thumbnail ${currentImage === 2 ? 'active' : ''}`}
        onClick={() => setCurrentImage(2)}
    >
        <img src={images[2]} alt={alt} />
        
        </button>

        <button

        type="button"
        className={`car-gallery-thumbnail ${currentImage === 3 ? 'active' : ''}`}
        onClick={() => setCurrentImage(3)}
        
        >

        <img src={images[3]} alt={alt} />
        
        </button>

        </div>

        </div>
    )
}

export default CarGallery