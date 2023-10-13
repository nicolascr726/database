import React, { Fragment, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

export const Formulario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email === '' || age === "" || position === "" || phoneNumber === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos!'
            });
            setError(true);
            return
        }
        else
            Swal.fire({
                icon: 'success',
                title: 'Agregado',
                text: 'Colaborador agregado éxitosamente',
                showConfirmButton: false,
            })
        setError(false);
        return
    };

    return (
        <Fragment>
            <Form className='formulario' onSubmit={handleSubmit}>
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