import React from 'react';
import { useForm } from '../../hooks/useForm';
import { listaSearch } from '../../actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const dispatch = useDispatch();

    const { search } = useSelector(store => store.heroe);
    console.log(search);

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });
    const { searchText } = formValues;


    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(listaSearch(searchText));
        // history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        (search) ?
                            (

                                search.map(hero => (
                                    <HeroCard
                                        key={hero.id}
                                        {...hero}
                                    />
                                ))

                            ) :
                            <p>No hay datos</p>
                    }




                </div>

            </div>


        </div>
    )
}
