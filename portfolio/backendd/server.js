
//Porte du serveur 
const PORT = 5000

import express from 'express'
import { temoignageList, addTemoignage, updateTemoignage, deleteTemoignage, getTemoignageById } from './controllers/Temoignages.js'

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// Validations 
import temoignageRules from './validation/TemoignageValidation.js';

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Bienvenu cher utilisateur');
})

app.listen(5000, () => console.log(`Serveur running on port ${PORT}`))

app.get('/Temoignages', temoignageList)
app.post('/Temoignages',temoignageRules, addTemoignage)
app.put('/Temoignages/:email', updateTemoignage)
app.delete('/Temoignages/:email', deleteTemoignage)
app.get('/Temoignages/:email', getTemoignageById)
