const events=require('events');
const eventEmmiter=new events.EventEmitter();
eventEmmiter.on('speak',(name)=>
{
    console.log(name ,'is speking...');
});
eventEmmiter.emit('speak','Anil');