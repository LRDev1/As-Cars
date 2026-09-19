import corollaImage from '../assets/images/corolla-2024.jpg'
import civicImage from '../assets/images/civic-2023.jpg'
import ecosportImage from '../assets/images/ecosport-2019.jpg'

const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        image: corollaImage,
        version: "XEi 2.0 Flex 16V Aut.",
        year: 2024,
        price: 139990,
        mileage: 32400,
        transmission: "Automática",
        fuel: "Flex",
        category: "Sedan",
        location: "São Paulo, SP",
    },

    {
        id: 2,
        brand: "Honda",
        model: "Civic",
        image: civicImage,
        version: "Touring 1.5 Turbo Flex 16V Aut.",
        year: 2024,
        price: 159990,
        mileage: 28000,
        transmission: "Automática",
        fuel: "Flex",
        category: "Sedan",
        location: "Rio de Janeiro, RJ",
    },

    {
        id: 3,
        brand: "Ford",
        model: "EcoSport",
        image: ecosportImage,
        version: "Freestyle 1.5 Flex 16V Aut.",
        year: 2019,
        price: 109990,
        mileage: 15000,
        transmission: "Automática",
        fuel: "Flex",
        category: "SUV",
        location: "Belo Horizonte, MG",
    },
];

export default cars;