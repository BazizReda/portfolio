import axios from 'axios'

// Creation d'une instance d'axios pour ne pas toujours taper url de base

const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_URL,  // Url de base qui est http://localhost:5000/
})

export default apiRequest

