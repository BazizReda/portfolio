import apiRequest from "../axios/api"

//1- Les actions (qui modifient le store)

const LIST_TEMOIGNAGE = 'LIST_TEMOIGNAGE'
const CURRENT_TEMOIGNAGE = 'CURRENT_TEMOIGNAGE'

//2- Createurs d'actions 

//2-1 Createurs d'actions classiques (retournent un objet)

export const setAllTemoignages = (temoignages) => ({ type: LIST_TEMOIGNAGE, payload: temoignages })
export const setTemoignage = temoignage => ({ type: CURRENT_TEMOIGNAGE, payload: temoignage })

//2-2 Createurs d'actions aynchrones liees au backend, elles utilisent les fonctions thunk et axios

// Ajouter un etudiant a la base de donnee
export const addTemoignage = (temoignage) => async (dispatch, getState) => {
    const token = getState().auth?.token
    const result = await apiRequest({
        method: 'post',
        url: '/temoignages',
        data: temoignage,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
        }
    })

    dispatch(getAllTemoignages())
    return result
}

// Mise a jour d'un etudiant
export const updateTemoignage = (temoignage, id) => async (dispatch, getState) => {
    const token = getState().auth?.token
    const result = await apiRequest({
        method: 'put',
        url: `/temoignages/${id}`,
        data: temoignage,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
        }
    })
    dispatch(getAllTemoignages())
    return result
}

export const deleteATemoignage = (id) => async (dispatch, getState) => {
    const token = getState().auth?.token
    const result = await apiRequest({
        method: 'delete',
        url: `/temoignages/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
        }
    })
    dispatch(getAllTemoignages())
    return result
}

export const getTemoignageById = (id) => async (dispatch, getState) => {
    const token = getState().auth?.token
    const result = await apiRequest({
        method: 'get',
        url: `/temoignages/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
        }
    })
    dispatch(setTemoignage(result.data.data))
    return result
}

export const getAllTemoignages = () => async (dispatch, getState) => {
    const token = getState().auth?.token
    const result = await apiRequest({
        method: 'get',
        url: '/temoignages',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
        }
    })
    dispatch(setAllTemoignages(result.data.data))
    return result
}


// 3-Le reducteur pour les etudiants

// -Definir l'etat initial pour l'objet global pour les etudiants

const initialState = {
    temoignages: [],
    temoignage: {}
}

export const temoignageReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_TEMOIGNAGE:
            return { ...state, temoignages: payload }
        case CURRENT_TEMOIGNAGE:
            return { ...state, temoignage: payload }
        default:
            return state
    }
}
