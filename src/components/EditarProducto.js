import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	// Nuevo state de producto
	const [producto, setProducto] = useState({
		nombre: '',
		precio: '',
	});

	// Prodcuto a editar
	const productoEditar = useSelector(state => state.productos.productoEditar);

	// Llenar el state automáticamente
	useEffect(() => {
		setProducto(productoEditar);
	}, [productoEditar]);

	// Leer los datos del formulario
	const onChangeFormulario = e => {
		setProducto({
			...producto,
			[e.target.name]: e.target.value,
		});
	};

	const { nombre, precio } = producto;

	const submitEditarProducto = e => {
		e.preventDefault();

		dispatch(editarProductoAction(producto));
		history.push('/');
	};

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'>
							Editar Producto
						</h2>
						<form onSubmit={submitEditarProducto}>
							<div className='form-group'>
								<label>Nombre Producto</label>
								<input
									type='text'
									name='nombre'
									className='form-control'
									placeholder='Nombre Producto'
									value={nombre}
									onChange={onChangeFormulario}
								/>
							</div>

							<div className='form-group'>
								<label>Precio Producto</label>
								<input
									type='number'
									name='precio'
									className='form-control'
									placeholder='Precio Producto'
									value={precio}
									onChange={onChangeFormulario}
								/>
							</div>

							<button
								type='submit'
								className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditarProducto;
