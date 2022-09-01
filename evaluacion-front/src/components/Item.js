
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item({ nombre, descripcion, stock, aumentarCompras }) {
  const [unidadesDisponibles, setUnidadesDisponibles] = useState(stock);

  const hayStock = () => unidadesDisponibles > 0;

  const handleClick = () => {
    setUnidadesDisponibles(unidadesDisponibles - 1);
    aumentarCompras();
  };

  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        En stock: {hayStock() ? unidadesDisponibles : <span>agotado</span>}
      </h5>
      <button onClick={handleClick} disabled={!hayStock()}>
        {hayStock() ? "COMPRAR" : "SIN STOCK"}
      </button>
    </div>
  );
}
