import {types} from '../types/types';
import React from 'react'

const initialState = {
    heroe: [],
    search: []
}

export const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Registrar:
            return{
                id: action.payload.id,
                superhero: action.payload.superhero,
                publisher: action.payload.publisher,    
                alter_ego: action.payload.alter_ego,
                first_appearance: action.payload.first_appearance,
                characters: action.payload.characters,
            }
            case types.Listar:
                return{
                    ...state,
                    heroe: [...action.payload]
                }
            case types.cargaImg:
                return{
                    url: action.payload.file
                }
            case types.ListarBusqueda:
                return{
                    ...state,
                    search: [...action.payload]
                }
               
        default:
            return state;
    }
}
