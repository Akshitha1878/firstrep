//main.js
const EventManagement = require('./5');
const em = new EventManagement();

em.on('start', (msg) => console.log(msg));
em.on('in-progress', (msg) => console.log(msg));
em.on('completed', (msg) => console.log(msg));

em.start();
em.inProgress();
em.completed();