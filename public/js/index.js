var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'Shafik',
    text:'What time are we meeting'
  });


});

socket.on('disconnect', function (){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
