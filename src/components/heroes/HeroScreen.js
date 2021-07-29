import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';


export const HeroScreen = ({ history }) => {


    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src=""
                    alt=""
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3></h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> </li>
                    <li className="list-group-item"> <b> Publisher: </b> </li>
                    <li className="list-group-item"> <b> First appearance: </b></li>
                </ul>

                <h5> Characters </h5>
                <p>  </p>

                <button 
                    className="btn btn-outline-info"
                    onClick=""
                >
                    Return
                </button>

            </div>

        </div>
    )
}
