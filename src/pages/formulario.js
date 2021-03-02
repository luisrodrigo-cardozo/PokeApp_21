import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { useHistory, Link} from "react-router-dom";
import swal from 'sweetalert';
//importar atomics
import TextFields from '../atomics/textFields';
import TextEmail from '../atomics/textEmail';
// importar estilos
import estilos_card from '../styles/styles-card';

const Formulario = ({ addPoke, setAddpoke }) => {
    const [invalid, setInvalid] = useState('')
    let history = useHistory();
    const {card, card_img, text} = estilos_card
    console.log(addPoke)
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        image: addPoke.map(poke => {
            return (
                `<div style="${card}"> 
                     <img src="${poke.sprites.front_default} "style="${card_img}"/>
                     <h1 style="${text}">Name: ${poke.name}</h1>
                     <h1 style="${text}">Abilities: ${poke.abilities[0].ability.name }</h1>
                </div>`
            )
        })
    })

    const handler = (evt) => {
        const { name, value } = evt.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    console.log(user)
    const enviarDatos = (e) => {
        e.preventDefault();
        if (user.nombre === '') {
            swal({
                title: 'Atención',
                text: 'Debe ingresar el nombre',
                icon: 'warning',
                button: 'Aceptar'
            }).then(resp => {
                if (resp) {
                    setInvalid('')
                }
            })
            setInvalid('is-invalid')

        } else if (user.apellido === '') {
            swal({
                title: 'Atención',
                text: 'Debe ingresar el apellido',
                icon: 'warning',
                button: 'Aceptar'
            }).then(resp =>{
                if(resp) {
                    setInvalid('')
                }
            })
            setInvalid('is-invalid')
        } else if (user.email === '') {
            swal({
                title: 'Atención',
                text: 'Debe ingresar el correo electronico',
                icon: 'warning',
                button: 'Aceptar'
            })
                .then(resp => {
                    if (resp) {
                        setInvalid('')
                    }
                })
            setInvalid('is-invalid')
        } else {
            setInvalid('')
            emailjs.send('gmailMessage', 'template_selu6i4', user, 'user_BeJiEsll5uv1aFaetZRfG')
                .then((result) => {
                    console.log(result.text);
                    swal({
                        title: 'Enviado',
                        text: 'Mensaje enviado con exito',
                        icon: 'success',
                        button: 'Aceptar'
                    }
                    )
                    history.push("/busca_poke");
                    setAddpoke([])
                    setUser({
                        nombre: '',
                        apellido: '',
                        email: ''
                    })
                }, (error) => {
                    console.log(error.text);
                });
        }


    }
    return (
        <div className=' fondo-form'>
            <h1 className='text-white'>Formulario</h1>
            <form className='box'>
                <div className='row '>
                    <div className='col-12'>
                        <label className='font-weight-bold text-white'>Nombre: </label>
                        <TextFields name='nombre'
                            placeholder='Ingrese nombre'
                            value={user.nombre}
                            onChange={handler}
                            className={`form-control  ${invalid}`} 
                        />
                        {/* <input name='nombre' type='text' placeholder='Ingrese nombre' value={user.nombre} onChange={handler} className='form-control'/> */}
                    </div>
                    <div className='col-12'>
                        <label className='font-weight-bold text-white'>Apellido: </label>
                        <TextFields name='apellido'
                            placeholder='Ingrese apellido'
                            value={user.apellido}
                            onChange={handler}
                            className={`form-control  ${invalid}`}
                        />

                        {/* <input name='apellido' type='text' placeholder='Ingrese apellido' value={user.apellido} onChange={handler} /> */}
                    </div>
                    <div className='col-12'>
                        <label className='font-weight-bold text-white'>Correo: </label>
                        <TextEmail name='email'
                            placeholder='ingrese email'
                            value={user.email}
                            onChange={handler}
                            className={`form-control  ${invalid}`}
                        />
                        {/* <input name='email' type='email' placeholder='Ingrese email' value={user.email} onChange={handler} /> */}
                    </div>
                    <div className='col-12'>
                        <button type='button' className='btn btn-success' onClick={enviarDatos}>Enviar <i className="fas fa-share-square"></i> </button>
                        <Link to='/busca_poke'className='btn btn-primary text-white'><i className="fas fa-arrow-circle-left"></i> Anterior</Link>
                    </div>
                </div>
                <div className='font-weight-bold text-white'>
                    <h5>Nombre: {user.nombre}</h5>
                    <h5>Apellido: {user.apellido}</h5>
                    <h5>{user.email}</h5>
                </div>
            </form>

        </div>
    )

}


export default Formulario