import "../style/header.css";
import { Buscador } from './buscador';
import { Navigation } from './navegation';

export default function Header() { 
  return (
    <div className="container">
    <Navigation></Navigation>
    <Buscador></Buscador>
    </div>
  )
}
