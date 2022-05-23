const net = require('net')

const socket = net.Socket()

socket.conect(8000,'localhost')

socket.write('Hola?')

socket.on('data', data => console.log(data.toString()))

