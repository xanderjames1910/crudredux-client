import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Muestra una alerta
const crearAlerta = alerta => ({
	type: MOSTRAR_ALERTA,
	payload: alerta,
});

export function mostrarAlerta(alerta) {
	return dispatch => {
		dispatch(crearAlerta(alerta));
	};
}

// Ocultar alerta
const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});

export function ocultarAlertaAction() {
	return dispatch => {
		dispatch(ocultarAlerta());
	};
}
