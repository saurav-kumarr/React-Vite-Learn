// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/topics">Topics</Link>
      </nav>

      {/* Main content */}
      <main className="main-content" style={{ padding: "20px" }}>
        <Outlet /> {/* This renders the child route */}
      </main>

      {/* Footer */}
      <footer style={{ padding: "10px", background: "#eee", marginTop: "20px" }}>
        <p>© {new Date().getFullYear()} Saurav’s Learning Portfolio</p>
      </footer>
    </div>
  );
}

export default Layout;