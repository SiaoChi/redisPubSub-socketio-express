# redisPubSub-socketio-express
simple test for redis pubsub function with socketIO to implement real time server to server communication.

## 1. redis pubsub observation in localhost terminal
```
redis-server  # open your redis-server in terminal
redis-cli # open at least 2 terminal for redis-cli

# one of the terminal
subscribe kelly_channel

#others
publish kelly_channel "any message you want..."

```
https://github.com/SiaoChi/redisPubSub-socketio-express/assets/98171354/22fa8913-6eeb-42b3-85ed-99a11ddf4daa


## 2. redis pubsub + socketIO to frontend 
#### Using express + socketIO server to implement realtime communication
<p>redis publish {channel} {message} -> socketIO received -> socketIO emit {message} to frontend which connecte with socketIO.</p>

https://github.com/SiaoChi/redisPubSub-socketio-express/assets/98171354/9da58c8e-866a-402d-ba73-1223494df63b

