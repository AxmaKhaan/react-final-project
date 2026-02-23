import { useState } from "react";
import "/src/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const  handleSidebar = () => {
    setIsActive(!isActive)
  }
  console.log(isActive)
  const buttonClasses = `X-navbar ${isActive ? "active" : "not"}`;
    const closeSidebar = () => {
        setIsActive(false)
    }
  return (
    <>
    
    <header>
      <nav className={buttonClasses} >
        <div className="links1">
        <a onClick={closeSidebar}><img src="public/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt=""/></a>
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/courses' className="nav-link">Courses</Link>
        <Link to='/students' className="nav-link">Add Students</Link>
        <Link to='/courseDetails' className="nav-link">student detail</Link>
        </div>
      </nav>

      <nav className="navbar">
        
        <div className="logo"><h1>MindForge</h1></div>
        <div className="links">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/courses' className="nav-link">Courses</Link>
        <Link to='/students' className="nav-link">Add Students</Link>
        <Link to='/courseDetails' className="nav-link">student detail</Link>
        
        </div>
        <a onClick={handleSidebar} ><img src="menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt=""/></a>
      </nav>
    </header>

    
    </>
  )
}
