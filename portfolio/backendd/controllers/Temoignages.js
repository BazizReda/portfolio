 //import data from '../src/data.json'   //On ne peut pas import json avec module type
import { validationResult } from 'express-validator'
let data = [
    {
        "nom": "James",
        "email": "Bond@reda.ca",
        "message": "super travail!",
        
        
    },
    {
        "nom": "James",
        "email": "Bond@lacite.ca",
        "message": "mauvais travail!",
        
        
    }
    
]
// console.log(data)

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
        return {
            // key: error.param,
            // message: error.msg
            [error.path]: error.msg
        };
    },
});

export const addTemoignage = (req, res) => {
    const temoignageInfo = req.body
    // console.log('Body',req)

    const errors = myValidationResult(req)  //Fonction modifiee
    // const errors = validationResult(req)  //Fonction modifiee
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const itExists = data.find(temoignage => temoignage.email === temoignageInfo.email)
    if (itExists) return res.status(422).json([{ key: 'email', message: "Le temoignage existe deja" }])
    // data.push(studentInfo)
    data = [...data, temoignageInfo]
    res.status(200).json({ data, message: "Le temoignage ajoute avec succes" })
}

export const temoignageList = (req, res) => {
    if (!data.length) return res.status(200).json({ error: false, message: "Pas de temoignaage dans la liste" })
    res.status(200).json({ error: false, data, message: "List des temoignage" })
}

export const updateTemoignage = (req, res) => {
    const { email } = req.params
    const allTemoignageEmails = data.map(temoignage => temoignage.email)
    if (!email) {
        res.status(422).json([{ key: 'email', message: "L'email est requis" }])
    } else if (!allTemoignageEmails.includes(email)) {
        res.status(404).json([{ key: 'email', message: "Cet email n'existe pas" }])
    }
    const updatedTemoignage  = req.body
    const newData = data.map(temoignage => {
        if (temoignage.email === email) {
            return updatedTemoignage
        }
        return temoignage
    })

    data = [...newData]
    res.status(200).json({ message: "Temoignage mis a jour correctement" })
}

export const deleteTemoignage = (req, res) => {
    const { email } = req.params
    const allTemoignageEmails = data.map(temoignage => temoignage.email)
    if (!email) {
        res.status(400).json({ error: true, message: "L'email du temoignage est requis" })
    } else if (!allTemoignageEmails.includes(email)) {
        res.status(404).json({ error: true, message: "Ce temoignage n'existe pas" })
    }
    const newData = data.filter(temoignage => temoignage.email !== email)
    data = newData
    res.status(200).json({ message: `Le temoignage email ${email} a ete supprime avec succes` })
}


export const getTemoignageById = (req, res) => {
    const { email } = req.params
    const allTemoignageEmails = data.map(temoignage => temoignage.email)
    if (!email) {
        res.status(400).json({ error: true, message: "Lemail du temoignage est requis" })
    } else if (!allTemoignageEmails.includes(email)) {
        res.status(404).json({ error: true, message: "Ce temoignage n'existe pas" })
    }
    const thisTemoignage = data.find(temoignage => temoignage.email === email)
    res.status(200).json({ error: false, data: thisTemoignage })
}