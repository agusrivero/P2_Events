const EventEmitter = require('./events');
const later = require('later');

class Programador extends EventEmitter{
	constructor(horario){
		super();
		for (let i=0; i<horario.length; i++){
			var prog = horario[i];
			later.date.localTime();
			const temperatura = prog.temperatura;
			// console.log("A las "+prog.hora+" queremos una temperatura de "+prog.temperatura+"ºC");
			later.setInterval(() => this.emit('ideal', temperatura), later.parse.text('at '+prog.hora));

		}
	}
}

exports = module.exports = Programador;