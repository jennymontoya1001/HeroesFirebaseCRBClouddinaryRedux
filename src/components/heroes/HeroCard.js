import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    picture
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={picture} className="card-img" alt="" />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text"> </p>

                     

                        <p className="card-text">
                            <small className="text-muted"></small>
                        </p>

                        <Link to="">
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
