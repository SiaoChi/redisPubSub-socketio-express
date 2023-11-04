import express from 'express';
import http from 'http';
import redis from 'ioredis';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server)

// 創建一個 Redis 客戶端
const redisClient = new redis();

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index')
})

// Socket.io 連線處理
io.on('connection', (socket) => {
  console.log('前端使用者已連接');

  // 設定 Socket.io 事件處理程序，當 Redis 收到訊息時，將其傳遞到前端
  redisClient.subscribe('my_channel', () => {
    redisClient.on('message', (channel, message) => {
      socket.emit('message', message);
    });
  });

  socket.on('disconnect', () => {
    console.log('前端使用者已斷開連線');
  });
});

server.listen(3000, () => {
  console.log('伺服器運行在端口 3000');
});
