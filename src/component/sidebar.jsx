import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#1f2937", color: "white", height: "100vh" }}>
      <h2>Smart SRV</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/live">Live Camera</Link></li>
        <li><Link to="/search">Search Person</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
