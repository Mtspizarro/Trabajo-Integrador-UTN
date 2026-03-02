import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Página de Inicio</h1>
      {user ? (
        <div>
          <h2>¡Bienvenido, {user.nombre}!</h2>
          <p>Tu correo es: {user.email}</p>
        </div>
      ) : (
        <p>No hay ningún usuario identificado. Por favor, ve a Registro.</p>
      )}
    </div>
  );
}

export default App;