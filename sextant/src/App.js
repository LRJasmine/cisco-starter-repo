import './App.css';
import Navbar from './Navbar.js';
import Exhibit from './Exhibit.js';
import PublicIP from './PublicIP.js';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap">
        <Exhibit exhibitheading="IPv4" exhibitcomponent={<PublicIP ip="ipv6" />} />
        <Exhibit exhibitheading="IPv6" exhibitcomponent={<PublicIP ip="ipv6" />} />
      </div>
      </div>
  );
}

export default App;
