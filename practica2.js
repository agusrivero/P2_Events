
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

//Creamos un programador que establezca las horas
const horarios = [
  { hora: "07:00",
    temperatura: 22
  },
  { hora: "11:12",
    temperatura: 18
  },
  { hora: "18:00",
    temperatura: 22
  },
  { hora: "23:00",
    temperatura: 20
} ];
const schedule = new Programador(horarios);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));
// schedule.on('ideal', (tempertura) => termostato.indicarTemperaturaIdeal(tempertura));
schedule.on('ideal', function(tempertura) {
	console.log("Nueva temperatura ideal: "+tempertura+"ºC")
	termostato.indicarTemperaturaIdeal(tempertura);
});
// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

