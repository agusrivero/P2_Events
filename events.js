class EventEmitter{

	constructor(){
		this.events = {};
	}

	on(nameEvent, listener){
		if(!this.events[nameEvent]){
			this.events[nameEvent] = [];
		}

		this.events[nameEvent].push(listener);
	}

	emit(nameEvent, args){
		const event = this.events[nameEvent];
		if (event){
			event.forEach(cb => cb.call(null, args))
		}
	}
}

exports = module.exports = EventEmitter;