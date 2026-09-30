import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty">
      <h2>404 - Page Not Found</h2>
      <p style={{ margin: "10px 0 20px" }}>The page you requested does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}