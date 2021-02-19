import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
//importar atomics
import TextFields from '../atomics/textFields';
import TextEmail from '../atomics/textEmail';

const Formulario = ({ addPoke }) => {
    console.log(addPoke)
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        image: addPoke.map(poke => {
            return (
                `<div>
                     <img src="${poke.sprites.front_default}"/>
                     <h3>${poke.name}</h3>
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
            alert('debera ingresar el nombre')
        } else if (user.apellido === '') {
            alert('debera ingresar el apellido ')
        } else if (user.email === '') {
            alert('debera ingresar el correo electronico')
        }
        emailjs.send('gmailMessage', 'template_selu6i4', user, 'user_BeJiEsll5uv1aFaetZRfG')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado')
            }, (error) => {
                console.log(error.text);
                alert('Mensaje no enviado')
            });
            setUser({
                ...user,
                nombre:'',
                apellido:'',
                email:''
            })
    }
    return (
        <div className=' bg-secondary'>
            <h1>Formulario</h1>
            <form>
                <div className='row border'>
                    <div className='col-12'>
                        <label className='font-weight-bold'>Nombre: </label>
                        <TextFields name='nombre'
                         placeholder='Ingrese nombre' 
                         value={user.nombre} 
                         onChange={handler} />
                        {/* <input name='nombre' type='text' placeholder='Ingrese nombre' value={user.nombre} onChange={handler} /> */}
                    </div>
                    <div className='col-12'>
                        <label className='font-weight-bold'>Apellido: </label>
                        <TextFields name='apellido'
                         placeholder='Ingrese apellido' 
                         value={user.apellido} 
                         onChange={handler}/>
                        {/* <input name='apellido' type='text' placeholder='Ingrese apellido' value={user.apellido} onChange={handler} /> */}
                    </div>
                    <div className='col-12'>
                        <label className='font-weight-bold'>Correo: </label>
                        <TextEmail name='email' 
                        placeholder='ingrese email'
                        value={user.email}
                        onChange={handler}
                         />
                        {/* <input name='email' type='email' placeholder='Ingrese email' value={user.email} onChange={handler} /> */}
                    </div>
                    <div className='col-12'>
                        <button  type='button' className='btn btn-success' onClick={enviarDatos}>Enviar <i className="fas fa-share-square"></i> </button>     
                    </div>
                </div>
            </form>
            <div className='col-12'>
                <h5>Nombre:{user.nombre}</h5>
                <h5>Apellido:{user.apellido}</h5>
                <h5>{user.email}</h5>
            </div>
        </div>
    )

}


export default Formulario