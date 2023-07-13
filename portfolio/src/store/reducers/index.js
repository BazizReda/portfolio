// Combiner tous les reducteurs en un seul
import { temoignageReducer } from "./temoignageReducer.js";


const reducers = {
    temoignage: temoignageReducer,  // Renommer avec le nom de notre choix
       // Information de la personne connectee
}

export default reducers