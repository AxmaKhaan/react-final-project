import "/src/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    
    <header>
      <nav className="navbar">
        <div className="logo"><h1>MindForge</h1></div>
        <div className="links">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/courses' className="nav-link">Courses</Link>
        <Link to='/students' className="nav-link">Add Students</Link>
        <Link to='/courseDetails' className="nav-link">student detail</Link>
        </div>
      </nav>
    </header>

    
    </>
  )
}
