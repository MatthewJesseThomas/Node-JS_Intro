














// const agent = require('./data.js');
// console.log(agent.firstName + ' | ' + agent.lastName + ' | ' + agent.codeName + ' | ' + `${'Agent Status: '}` + agent.agentStatus)
// const companyMsg = require('./message.js');

// console.log(companyMsg);
// let myLogMod = require('./log.js');

// myLogMod.info('Node.js started');
// myLogMod.warning('Node.js has parse 884-LabelModule');
// myLogMod.error('Node.js has unsuccessfully loaded with Error7720');
// ==========================================
// let events = require('events');
// let util = require('util');

// let Person = function(name, surName){
//     this.name = name;
//     this.surName = surName;
// };

// util.inherits(Person, events.EventEmitter);

// let James = new Person('James');
// let Mary = new Person('Mary');
// let Joseph = new Person('Joseph');
// let people = [James, Mary, Joseph];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.names + person.surName + 'Said: ' + msg );
//     });
// });

// James.emit('speak', 'Hey Agents');

// ========================================
// Node Event Emitter
// let events = require('events');

// let myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'The Event Was Emitted');
// ============================================
// console.log(stuff.counter(['Draco', 'Piaty', 'Zeldris', 'Momonga']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));
