import { Link } from 'react-router-dom';
import "../style/header.css"

function Header() {
  return (
    <div>
        <ul>
        <li><Link to='/'>Inicio</Link></li>
        </ul>
    </div>
  )
}

export default Header