// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import React from "react";
import productos from "./data";
import Item from "./Item";

export default function Listado({aumentarCompras}) {
  return (
    <div>
      {
        productos.map(({id, producto, stock}) => (
          <Item 
            key={id} 
            nombre={producto.nombre} 
            descripcion={producto.descripcion} 
            stock={stock} 
            aumentarCompras={aumentarCompras}
          /> 
        ))
      }
    </div>
  );
}
