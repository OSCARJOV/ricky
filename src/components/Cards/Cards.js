import React from 'react'
import style from './Cards.module.scss'

const Cards = ({ results }) => {
    let display;
    console.log(results);

    if (results) {
        display = results.map((x) => {
            let { id, name, image, location, status, type, origin, episode } = x;
            return (
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={style.cards}>
                        <img src={image} alt="" className='img-fluid' />
                        <div style={{padding : "10px"}} className="content">
                            <div className="fs-4 fw-bold mb-2">{name}</div>
                            <div className="">
                                <div className="fs-6">UBICACION:{location.name}</div>
                                <div className="fs-6">TIPO: {type}</div>
                                <div className="fs-6">ORIGEN: {origin.name}</div>
                                <div className="fs-6">Nº EPISODIOS: {episode.length}</div>

                            </div>
                        </div>
                    </div>
                    <div className={`${style.badge} position-absolute badge bg-danger`}>
                        {status}
                    </div>
                </div>
            );
        });
    } else {
        display = "No se encontro";
    }
    return <>{display}</>;
}

export default Cards;
