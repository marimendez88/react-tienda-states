import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
	//Crear listado de productos
	const [productos, guardarProductos] = useState([
		{ id: 1, nombre: "Camisa ReactJS", precio: 10 },
		{ id: 2, nombre: "Camisa VueJS", precio: 20 },
		{ id: 3, nombre: "Camisa AngularS", precio: 30 },
		{ id: 4, nombre: "Camisa NodeJS", precio: 40 },
		{ id: 5, nombre: "Camisa MongoJS", precio: 50 },
	]);

	//State para un carrito de compras
	const [carrito, agregarProducto] = useState([]);

	const fecha = new Date().getFullYear();
	return (
		<Fragment>
			<Header titulo="Tienda Virtual" />

			<h1>Lista de productos</h1>
			{productos.map((producto) => (
				<Producto
					producto={producto}
					key={producto.id}
					productos={productos}
					carrito={carrito}
					agregarProducto={agregarProducto}
				/>
			))}
			<Carrito carrito={carrito} agregarProducto={agregarProducto} />
			<Footer fecha={fecha} />
		</Fragment>
	);
}

export default App;
