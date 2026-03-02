import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '10px', 
      backgroundColor: '#f0f0f0',
      marginBottom: '20px',
      justifyContent: 'center'
    }}>
      <Link to="/">Inicio</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/acerca">Acerca de</Link>
      
      {user && (
        <button onClick={logout} style={{ marginLeft: '20px' }}>
          Cerrar Sesión ({user.nombre})
        </button>
      )}
    </nav>
  );
}

export default Navbar;