const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('second callback - ', args[1]);
};

// set first callback of my own event function
emitter.on('jinsoo', (args) => {
  console.log('first callback - ', args[0]);
});

// set second callback of my own event
emitter.on('jinsoo', callback1);

// event 발생시켜주는 함수
emitter.emit('jinsoo', [1, 2, 3]);
emitter.emit('jinsoo', [2, 4]);

// remove callback
emitter.removeListener('jinsoo', callback1);
emitter.emit('jinsoo', [3, 6]);
