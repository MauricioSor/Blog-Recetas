/* eslint-disable react/prop-types */
// import React from 'react';
import { Card, Button, Container,Row } from 'react-bootstrap/'
// import DetalleComida from './DetalleComida';

const CardComidas = ({ recetas }) => {

    return (
        <>
        <div><h1 className='text-start ms-2 mt-3'>Nuestras Selección Especial</h1></div>
        <Container >
        <Row xs={1} md={1} lg={3}xl={4}  className='d-flex justify-content-center my-2' >{
            recetas.map((item, index) => (
                <Card className='mx-1 my-2' style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" className='my-1' src={item.imagen} style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title className='text-center'>{item.nombre}</Card.Title>
                        <Card.Text className='text-truncate'>
                        {item.pasos}
                        </Card.Text>
                        <Button variant="primary">Ver Detalle</Button>
                    </Card.Body>
                </Card>
            ))}
            </Row>
        </Container>
        </>
    );
};

export default CardComidas;