const initialState = {
    sortBy: {
        type: 'rating',
        order: 'desc'
    },
    category: null
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }

        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}

export const setSortBy = ({ type, order }) => ({ type: 'SET_SORT_BY', payload: { type, order } })
export const setCategory = (catIndex) => ({ type: 'SET_CATEGORY', payload: catIndex })