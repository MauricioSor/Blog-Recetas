/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta } from '../../helpers/queries';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const DetalleComida = ({ item, index, actualizarComidas }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const borrar = () => {
        const recetasStorage = JSON.parse(localStorage.getItem("listaRecetas"));
        recetasStorage.splice(index, 1);
        localStorage.setItem("listaRecetas", JSON.stringify(recetasStorage));
        Swal.fire('Comida Eliminada', 'Actualizacion Exitosa', 'success');
        actualizarComidas(recetasStorage);
        //         reset();
        //         return respuesta;
        //  borrarReceta(comida.id).then((respuesta) => {
        //     if (respuesta.status === 200) {
        //         Swal.fire('Comida Eliminada', 'Actualizacion Exitosa', 'success');
        //         reset();
        //         return respuesta;
        //     } else {
        //         console.log(respuesta.status)
        //         Swal.fire('Error al Eliminar', `El producto ${comida.nombre} no se pudo borrar`, 'error');
        //     }
        // })
    }

    return (
        <tr>
            {
                <>
                {/* {console.log(item)} */}
                    <td>{index+1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.imagen}</td>
                    <td>{item.categoria}</td>
                    <td>
                        <Container className='d-flex'>
                            <Link className='btn btn-warning mx-1' to={'/administrador/EditarComida/' + index}>Editar</Link>
                            <Button onClick={() => { borrar() }} variant='danger' type='submit'>Eliminar</Button>
                        </Container>
                    </td>
                </>
            }
        </tr>
    );
};

export default DetalleComida;