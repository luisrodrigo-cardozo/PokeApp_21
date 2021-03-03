import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import logoPoke from '../images/logopokeapp.jpg'

const PokeApp = ({ addPoke, setAddpoke }) => {

    const [pokeNombre, setPokenombre] = useState('')
    const [pokemon, setPokemon] = useState({
        name: '',
        species: '',
        types: '',
        sprites: '',
        abilities: ''
    })

    const buscarPoke = () => {
        if (pokeNombre !== '') {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNombre}`)
                .then(response => response.json()
                    .then(data => {
                        // console.log(response)
                        setPokemon({
                            name: pokeNombre,
                            species: data.species.name,
                            types: data.types[0].type.name,
                            sprites: data.sprites.front_default,
                            abilities: data.abilities[0].ability.name
                        })
                        // console.log(data)
                    }))
                .catch(error => swal({
                    title: 'No se encontro',
                    text: `No se ha encontrado este pokemon ${pokeNombre}`,
                    icon: 'warning',
                    button: 'Aceptar'
                }
                ))
        }
        else {
            swal({
                title: 'Atención',
                text: 'Debe introducir el nombre en minuscula o el id del pokemon',
                icon: 'info',
                button: 'Aceptar'
            })
        }
    }

    //agregar elementos al array
    const agregarPoke = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(resp => resp.json())
            .then(data => {
                setAddpoke(
                    variable => [data, ...variable]
                )
            })
        setPokemon({
            name: '',
            species: '',
            types: '',
            sprites: '',
            abilities: ''
        })
    }

    const borrarPoke = (id) => {

        swal({
            title: 'Eliminar',
            text: '¿Estas seguro que deseas eliminar el pokemon?',
            icon: 'error',
            buttons: ['No', 'Si'],
            dangerMode: true
        }).then(respuesta => {
            if (respuesta) {
                const poke = addPoke.filter(pok => pok.id !== id)
                setAddpoke(poke)
                swal({
                    text: 'El pokemon ha sido eliminado con exito',
                    icon: 'success'
                })
            }
        })
    }

    return (
        <div className='bg-dark border'>
            <div className='mt-3'>
                <img src={logoPoke} alt='logo' />
            </div>
            <div className='mt-2'>
                <input className='mr-2' type='text' placeholder='Ingrese Id o Nombre' onChange={(event) => {
                    setPokenombre(event.target.value)
                }} />
                <button className='btn btn-info mb-2' onClick={buscarPoke}>Buscar <i className="fas fa-search"></i></button>
            </div>
            <div className='bg-dark container'>
                <div className='row '>
                    <div className='card-body border border-white mb-3 text-white col-sm-12'>
                        <h2>Name:{pokemon.name}</h2>
                        <h2>Species:{pokemon.species}</h2>
                        <h2>Type:{pokemon.types}</h2>
                        <img src={pokemon.sprites} alt='pokemon' />
                        <h2>{pokemon.abilities}</h2>
                        {pokemon.name !== '' ? (<button className='btn btn-success btn-lg' onClick={agregarPoke}>Agregar <i className="fas fa-user-plus"></i></button>) : (<></>)}
                        <Link to='/' className='btn btn-primary btn-lg'>Volver <i className="fas fa-arrow-circle-left"></i> </Link>
                    </div>
                </div>
            </div>
            {addPoke.length !== 0 ? (
                <div className='bg-dark col-sm-12'>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Images</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody className='text-white font-weight-bold '>
                            {addPoke.map((ii, i) => {
                                return (
                                    <tr key={i}>
                                        <th className='centrado-v' scope="row">{i + 1}</th>
                                        <td className='centrado-v'>{ii.name}</td>
                                        <td><img src={ii.sprites.front_default} alt='poke' /></td>
                                        <td>
                                            <div className='row'>
                                                <div className='col-sm-12 mb-3 mt-2'>
                                                    <button onClick={() => borrarPoke(ii.id)} className='btn btn-danger btn-sm'>Eliminar <i className="fas fa-trash-alt"></i></button>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <button type="button" className=" p-2 btn btn-primary btn-sm" data-toggle="modal" data-target={"#modal" + i}>
                                                        Ver <i className="far fa-eye"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/*inicio modal*/}
                                            <div className="modal fade" id={"modal" + i} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-dark text-white">
                                                            <h5 className="modal-title" id="exampleModalLabel">Info del Pokemon</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body bg-secondary text-white">
                                                            <div>
                                                                <h2>{ii.name}</h2>
                                                                <img src={ii.sprites.front_default} alt='imagenf' />
                                                                <img src={ii.sprites.back_default} alt='imageb' />
                                                                <h5>{ii.abilities[0].ability.name}</h5>
                                                                {/* <h5>{ii.abilities[1].ability.name}</h5> */}
                                                                <h5>{ii.stats[1].stat.name}</h5>
                                                                <h5>{ii.stats[1].base_stat}</h5>
                                                                <h5>{ii.stats[2].stat.name}</h5>
                                                                <h5>{ii.stats[2].base_stat}</h5>
                                                                <h5>Weight: {ii.weight}</h5>
                                                                <h5>Height: {ii.height}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer bg-danger">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close <i className="fas fa-window-close"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/*cierre modal*/}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Link to='/formulario' className=' mb-3 btn btn-success btn-lg text-white'>Confirmar <i className="fas fa-check-circle"></i></Link>
                </div>
            ) : (<div className='bg-secondary'>
                <h4>El carrito esta vacio </h4>
                <i className="fas fa-shopping-cart"></i>
            </div>)}
        </div>
    )
}


export default PokeApp;