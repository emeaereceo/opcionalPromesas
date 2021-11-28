// NO ENTENDI MUY BIEN EL FINAL DEL EJERCICIO, PERO CUMPLE CON LO SOLICITADO.
const url = 'https://jsonplaceholder.typicode.com/photos';

const traerData = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		// console.table(data);
		return data;
	} catch (error) {
		console.log(error);
	} finally {
		// console.log('Termino el proceso');
	}
};

const topVeinte = async () => {
	const albumes = await traerData();

	const result = albumes.filter((album) => album.id <= 20);
	console.table(result);
	setTimeout(() => {
		console.log('Informacion Enviada');
	}, 3000);
};

topVeinte();
