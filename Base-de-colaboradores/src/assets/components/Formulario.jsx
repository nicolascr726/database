import React, { Fragment, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

export const Formulario = ({colaboradores, setColaboradores, error, setError}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const pickOnSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || email === '' || age === "" || position === "" || phoneNumber === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos!'
            });
        }
        else{
            const nuevosColaboradores = {
                id: Date.now(),
                nombre: name,
                correo: email,
                edad: age,
                cargo: position,
                telefono: phoneNumber
            }
            setColaboradores([...colaboradores, nuevosColaboradores]);
            setName('')
            setEmail('')
            setAge('')
            setPosition('')
            setPhoneNumber(''); 
        }
    }
    console.log(pickOnSubmit)
    return (
        <Fragment>
            <Form className='formulario' onSubmit={pickOnSubmit}>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Control type="text" placeholder="Nombre del colaborador" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Control type="email" placeholder="Email del colaborador" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputPassword">
                    <Form.Control type="tel" placeholder="Edad del colaborador" onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputPosition">
                    <Form.Control type="text" placeholder="Cargo del colaborador" onChange={(e) => setPosition(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputPhoneNumber">
                    <Form.Control type="tel" placeholder="Teléfono del colaborador" onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <div>
                    <Button variant="success" type='submit' value='submit'>Agregar colaborador</Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Formulario