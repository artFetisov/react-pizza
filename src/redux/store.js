import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { filtersReducer } from './reducers/filtersReducer'
import { pizzasReducer } from './reducers/pizzasReducer'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

