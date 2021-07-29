import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from 'redux-thunk';
import {heroesReducer} from '../reducers/heroesReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    heroe: heroesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)