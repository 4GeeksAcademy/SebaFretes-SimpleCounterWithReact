import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Cards = (props) => {

    return (
        <div>
            <div className="card mx-3">
                <div className="card-body">
                    {props.icon == true ? <FontAwesomeIcon icon={faStopwatch} /> : props.num}
                </div>
            </div>
        </div>
    )
}

export default Cards;