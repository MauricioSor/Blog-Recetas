import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Button, Modal, Form, Row } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { iniciarSesion } from '../helpers/queries';
import { useNavigate } from 'react-router-dom'

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const enviarDatos = (usuario) => {
        console.log(usuario);
        iniciarSesion(usuario).then((respuesta) => {
            respuesta ? (sessionStorage.setItem('usuario', JSON.stringify(respuesta)), setUsuarioLogueado(respuesta), reset(), navegacion('/Administrador')) : undefined
        });
    }
    const navegacion = useNavigate();
    const cerrarSesion = () => {
        sessionStorage.removeItem('usuario');
        setUsuarioLogueado({});
        navegacion('/');
    }

    useEffect(() => {
        cargar();
    }, []);
    const cargar = () => {
        let comida = [
            {
                "id": 1,
                "nombre": "Sandwich",
                "precio": 2500,
                "imagen": "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208_1280.jpg",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "categoria": "simples"
            },
            {
                "id": 2,
                "nombre": "Fideos",
                "precio": 1500,
                "categoria": "simples",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://media.istockphoto.com/id/120046925/es/foto/spaghetti-con-salsa-de-crema.jpg?s=612x612&w=0&k=20&c=Kixx21ctd5BMmZrIwhHN52qFnQQPtVztn4GcP9t1a48="
            },
            {
                "id": 3,
                "nombre": "Lasagna",
                "precio": "22",
                "imagen": "https://media.istockphoto.com/id/1412196845/es/foto/lasa%C3%B1a-con-pescado-de-salm%C3%B3n-calabac%C3%ADn-salsa-bechamel-queso-parmesano-y-puerro-horneado-en-un.jpg?s=612x612&w=0&k=20&c=ER1OR9Tl-Tlll8g9G34Zar8Nbg7TKInIFNsAyYi-VF0=",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "categoria": "Comida al plato"
            },
            {
                "id": 4,
                "nombre": "Café",
                "precio": "600",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://media.istockphoto.com/id/1159612483/es/foto/espresso-caliente-y-grano-de-caf%C3%A9-en-la-mesa-negra-con-enfoque-suave-y-sobre-la-luz-en-el.jpg?s=612x612&w=0&k=20&c=11iD49l1EXkjU-eWzdOeqPN346OpIVPNFzD8KyczW0c=",
                "categoria": "Bebida Caliente"
            },
            {
                "nombre": "Chipa",
                "precio": "1000",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://media.istockphoto.com/id/1399454644/es/foto/p%C3%A3o-de-queijo.jpg?s=612x612&w=0&k=20&c=3As-r9SNAWbdL4l1qdLRlk_Pyk73Xx5x7Vkttapz3JM=",
                "categoria": "Simples",
                "id": 5
            },
            {
                "nombre": "Te",
                "precio": "500",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://media.istockphoto.com/id/1327091626/es/foto/dos-tazas-con-caf%C3%A9-y-t%C3%A9-verde.jpg?s=612x612&w=0&k=20&c=gdOrfDLKcJOiPKbzm6wuxDPKLjpjAxlfdLQfQjq56wA=",
                "categoria": "Simples",
                "id": 6
            },
            {
                "nombre": "Suprema Milanesa con papas",
                "precio": "3000",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://media.istockphoto.com/id/603258520/es/foto/schnitzel-y-patatas-fritas.jpg?b=1&s=612x612&w=0&k=20&c=fQCROtjElS7KnNh37B6ZSazJ6bHCIYfNQMxFK-aDTuo=",
                "categoria": "Simples",
                "id": 7
            },
            {
                "nombre": "Hamburguesa",
                "precio": "2800",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "categoria": "Simples",
                "id": 8
            },
            {
                "nombre": "Ensalada Cesar",
                "precio": "1500",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://images.pexels.com/photos/6671871/pexels-photo-6671871.png?auto=compress&cs=tinysrgb&w=1600",
                "categoria": "Simples",
                "id": 9
            },
            {
                "nombre": "Carne a la Pomarola",
                "precio": "3500",
                "pasos": "1.Cortar el pan 2. Poner dos fetas de queso 3. Dos fetas de salame, 3. Cerrar el pan",
                "imagen": "https://images.pexels.com/photos/16444386/pexels-photo-16444386/free-photo-of-comida-plato-carne-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "categoria": "Simples",
                "id": 10
            }
        ];

        localStorage.setItem("listaRecetas", JSON.stringify(comida));
    };
    return (
        <>
            <Navbar bg="primary" variant="dark" expand='lg'>
                <Container>
                    <Navbar.Brand as={Link} to="/">TusRecetas.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='nav-item nav-link' end to='/'>Inicio</NavLink>
                            {
                                (usuarioLogueado.id) ?
                                    <>
                                        <NavLink end className='nav-item nav-link' to='/administrador'>Administrador</NavLink>
                                        <Button variant="primary" className='border' onClick={cerrarSesion}>Cerrar Sesion</Button>
                                    </> : <NavLink end className='nav-item nav-link' onClick={handleShow} >Iniciar Sesion</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal className='border' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title ><h3 >Inicio de Sesion</h3></Modal.Title>
                </Modal.Header>
                <Container>
                    <Form onSubmit={handleSubmit(enviarDatos)}>
                        <Row>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese Correo electronico..."
                                    defaultValue="mauricio@admin.com"
                                    {...register('email', {
                                        required: 'El email es un dato obligatorio',
                                        pattern: {
                                            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                            message: 'El email debe tener el siguiente formato mail@dominio.com'
                                        }
                                    })}
                                />
                                <Form.Text className="text-danger">
                                    {errors.email?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingrese Contraseña"
                                    defaultValue="123Abcde"
                                    {...register('password', {
                                        required: 'El password es obligatorio',
                                        pattern: {
                                            value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                            message: 'El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.'
                                        }
                                    })}
                                />
                                <Form.Text className="text-danger">
                                    {errors.password?.message}
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Form.Group className='text-end my-2 '>
                            <Button className='mx-1' variant='danger' onClick={handleClose}>Cancelar</Button>
                            <Button className='mx-1' variant='primary' type='submit' onClick={handleClose}>Enviar</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </Modal>
        </>
    );
};

export default Menu;