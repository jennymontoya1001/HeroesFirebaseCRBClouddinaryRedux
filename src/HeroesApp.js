import React from 'react'
import { AppRouter } from './routers/AppRouter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {listarHeroe} from './actions/action';

export const HeroesApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listarHeroe());
     }, [dispatch])

    return (
        <AppRouter />
    )
}
