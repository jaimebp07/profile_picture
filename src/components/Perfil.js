import React from 'react';
import './Perfil.css'

function Perfil() {
    return (
        <div className='content-perfil'>
            <img className='img-perfil'
                src='https://scontent.feyp2-1.fna.fbcdn.net/v/t1.6435-9/212796073_2962788900610419_7163004677526732900_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FT6iJoP9d3AAX8NQD7C&_nc_ht=scontent.feyp2-1.fna&oh=00_AfClMgjTh0pLSznMnsAuJ9b85CF8d9NRtMiHkQIyjlaLTQ&oe=6447D18B' 
                alt='foto de Andres'/>
            <div className='container-description'>
                <p className='name'>Jaime Andres Baron Puin</p>
                <p className='description'> Estudiante de ingenieria de Sistema y computacion, de la universidad pedagogica y tecnologia ce colombia.</p>
            </div>

        </div>
    );
}

export default Perfil;