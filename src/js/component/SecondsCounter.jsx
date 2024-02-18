import React from "react";
import Cards from "./Cards";

const SecondsCounter = (props) => {
    return (
        <>
            <div className="mx-3 d-flex justify-content-center p-3" style={{ background: 'black' }}>
                <Cards icon={true} />
                <Cards num={Math.floor((props.seconds % 100000) / 10000)} />
                <Cards num={Math.floor((props.seconds % 10000) / 1000)} />
                <Cards num={Math.floor((props.seconds % 1000) / 100)} />
                <Cards num={Math.floor((props.seconds % 100) / 10)} />
                <Cards num={props.seconds % 10} />
            </div>
        </>
    )
}

export default SecondsCounter;