import React from 'react';
import './Perfil.css'

function Perfil() {
    return (
        <div className='content-perfil'>
            <img className='img-perfil'
                src='https://scontent.feyp2-1.fna.fbcdn.net/v/t1.6435-9/212796073_2962788900610419_7163004677526732900_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=teoJwET_N0MAX8Byc1E&_nc_ht=scontent.feyp2-1.fna&oh=00_AfAkKhe2drfQdmQpyJKAr07yVt7sZZmBtplMz2yV2oTB1A&oe=63EB888B' 
                alt='foto de Andres'/>
            <div className='container-description'>
                <p className='name'>Jaime Andres Baron Puin</p>
                <p className='description'> Estudiante de ingenieria de Sistema y computacion, de la universidad pedagogica y tecnologia ce colombia.</p>
            </div>

        </div>
    );
}

export default Perfil;