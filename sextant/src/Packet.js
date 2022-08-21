import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

// const client = new W3CWebSocket('wss://cisco-starter-repo.lrjasmine.repl.co:55455');
// const client = new W3CWebSocket('ws://localhost:55455');
// const client = new W3CWebSocket('ws://172.18.0.7:55455');
const client = new W3CWebSocket('ws://172.18.0.7:55455','echo-protocol');
// const client = new W3CWebSocket('wss://172.18.0.7:55455');
// const client = new W3CWebSocket('wss://172.18.0.7:55455', 'echo-protocol');

function Packet() {
  const [currentDate, setcurrentDate] = useState(null);
  const [clientopen, setclientopen] = useState(null);
  const [clienterror, setclienterror] = useState(null);
  const [clientclosed, setclientclosed] = useState(null);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setclientopen('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
      setcurrentDate(message);
    };
    client.onerror = function() {
      console.log('Connection Error');
      setclienterror('Connection Error');
    };
    client.onclose = function() {
      console.log('Client Closed');
      setclientclosed('Client Closed');
    };
  })

  return (
    <div>
      <p>Packet Latency</p>
      <p>{currentDate}</p>
      <p>{clientopen}</p>
      <p>{clienterror}</p>
      <p>{clientclosed}</p>
    </div>
  )
}

export default Packet;