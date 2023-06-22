import { Carousel, Spinner } from "react-bootstrap";
// import { buscarcomidas } from "../helpers/queries";
import { useState, useEffect } from "react";
import CardComidas from "./comidas/CardComidas";
const Home = () => {
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [recetas, setRecetas] = useState([]);
  const buscarRecetas = () => {

      setRecetas(JSON.parse(localStorage.getItem("listaRecetas")) || [])
      setMostrarSpinner(false);
  };
  useEffect(() => {
    setMostrarSpinner(true);
    buscarRecetas();
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
      {mostrarSpinner ? (
        <div className="my-5 d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <Carousel style={{ width: "100vw" }}>
            {recetas.map((item, index) => (
              <Carousel.Item key={index}>
                <div style={{ height: "400px" }}>
                  <img
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      filter: "blur(5px) opacity(60%)"
                    }}
                    src={item.imagen}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
                <Carousel.Caption>
                  <h1 className="display-1">{item.nombre}</h1>
                  <p>{item.descripcion}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          <CardComidas recetas={recetas}></CardComidas>
        </>
      )}
    </>
  );
};

export default Home;
