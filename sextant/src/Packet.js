import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

function Packet() {
  const [packetlatency, setpacketlatency] = useState(null);
  
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      // console.log(message);
      let datenow = Date.now();
      let latency = datenow - message.data;
      setpacketlatency(latency);
    };
    client.onerror = function() {
      console.log('Connection Error');
    };
    client.onclose = function() {
      console.log('Client Closed');
    };
  })

  return (
    <div>
      <p>{packetlatency}</p>
    </div>
  )
}

export default Packet;