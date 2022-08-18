import React, { useState, useEffect } from 'react';
import axios from "axios";

const ipv4Url = "https://api.ipify.org?format=json";
const ipv6Url = "https://api64.ipify.org?format=json";

function PublicIP(props) {
  const [ipdata, setipData] = useState(null);
  const [error, setError] = useState("");
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.ip === "ipv4") {
      axios.get(ipv4Url)
        .then((res) => {
          setipData(res.data.ip);
        })
        .catch((err) => {
          setError(err);
        });
    }
    else if (props.ip === "ipv6") {
      axios.get(ipv6Url)
        .then((res) => {
          setipData(res.data.ip);
        })
        .catch((err) => {
          setError(err);
          console.log(error);
        });
    }
  })

  return (
    <div>
      <p>{ipdata}</p>
    </div>
  )
}

export default PublicIP;
