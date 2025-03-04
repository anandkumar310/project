import {WebSocketServer} from 'ws'

import express from 'express';



 const app=express();
 const port=8080;

 const server=app.listen(port,()=>{
    console.log("server is listening..");
 });

 const wss=new WebSocketServer({server});

 wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("data from client : ",data);
        ws.send("thanks buddy!");
    })
 })

