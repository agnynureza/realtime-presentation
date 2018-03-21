const express = require('express')
const app  = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

//set connection
io.on('connection',(socket)=>{
  console.log('client id connected')
  socket.on('message',(payload)=>{
    socket.emit('message',payload.text)
    socket.broadcast.emit('message',payload.text)
  })
  
  socket.on('backcarousel', (slide) => {
    socket.broadcast.emit('backcarousel',slide.slide)
  })

  socket.on('nextcarousel', (slide) => {
    socket.broadcast.emit('nextcarousel',slide.slide)
  })

})

server.listen(4000,()=> console.log('server running at port 3000'))