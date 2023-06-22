import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
const CrearComida = () => {
  const [recetas, setRecetas] = useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const recetasStorage = JSON.parse(localStorage.getItem("listaRecetas")) || [];
    if (recetasStorage) {
      cargar();
      setRecetas(recetasStorage);
    }
  }, []);
  
  const guardar = (comidaNueva) => {
    setRecetas([...recetas, comidaNueva]);
    localStorage.setItem(
      "listaRecetas",
      JSON.stringify([...recetas, comidaNueva])
    );
    reset();
    Swal.fire("Comida Guardada", "Guardado Exitoso", "success");
  };
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
    <section className="container mainSection">
      <h1 className="mt-4">Nuevo Producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(guardar)}>
        <Form.Group>
          <Form.Label>Codigo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:145632a"
            {...register("nombre", {
              required: "El nombre de Comida es obligatorio",
              minLength: {
                value: 1,
                message: "La cantidad minima de caracteres es de 1",
              },
              maxLength: {
                value: 16,
                message: "La cantidad máxima de caracteres es 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre de Comida</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pj.Chipá"
            {...register("nombre", {
              required: "El nombre de Comida es obligatorio",
              minLength: {
                value: 2,
                message:
                  "La cantidad minima de caracteres es de 2 y maximo de 20",
              },
              maxLength: {
                value: 16,
                message:
                  "La cantidad minima de caracteres es de 2 y maximo de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 1200"
            {...register("precio", {
              required: "El precio de la Comida es obligatorio",
              min: {
                value: 20,
                message: "La cantidad minima es de $20",
              },
              max: {
                value: 10000,
                message: "La cantidad maxima es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://media.istockphoto.com/id/1462145716/es/foto/jugosos-bocados-de-carne-de-nueva-york.jpg?s=612x612&w=0&k=20&c=V8iCuI1dUVBjqajE9MDC8thQxBvL2RJkvbqqXL7IV0A="
            {...register("imagen", {
              required: "El imagen de Comida es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Bebida caliente"
            {...register("categoria", {
              required: "El nombre de categoria es obligatorio",
              minLength: {
                value: 2,
                message:
                  "La cantidad minima de caracteres es de 2 y maximo de 20",
              },
              maxLength: {
                value: 16,
                message:
                  "La cantidad minima de caracteres es de 2 y maximo de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearComida;
