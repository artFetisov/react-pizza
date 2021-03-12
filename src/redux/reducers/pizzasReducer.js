import axios from "axios"

const initialState = {
    items: [],
    isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }

        default:
            return state
    }
}

export const setPizzas = (items) => ({ type: 'SET_PIZZAS', payload: items })
export const setLoaded = (value) => ({ type: 'SET_LOADED', payload: value })

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    return axios.get(`/pizzas?${category === null ? '' : `category=${category}&`}_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

