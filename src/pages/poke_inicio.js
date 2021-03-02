import React from 'react';
import { Link } from 'react-router-dom';



const PokeInicio = () => {
    return (
        <div className=' fondo'>
            <Link to='/busca_poke' className='btn btn-secondary btn-lg'>Ingresar <i className="fas fa-play-circle"></i></Link>
        </div>
    )
}


export default PokeInicio;