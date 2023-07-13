import { body, param } from 'express-validator'

const temoignageRules = [
    body('nom').isLength({ min: 5 }).withMessage('Le nom doit contenir au moins 5 characteres'),
    body('email').notEmpty().withMessage('Le code ne peut pas etre vide'),
    body('message').notEmpty().isLength({ min: 5 }).withMessage('Le mesage doit contenir au moins 5 characteres'),
    // param('numero').notEmpty().withMessage('Le parametre numero est requis'),
]

export default temoignageRules