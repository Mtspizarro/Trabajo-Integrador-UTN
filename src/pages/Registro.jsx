import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   
    if (nombre.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres.'); 
      return;
    }
    if (!email.includes('@')) {
      setError('Introduce un email válido (ejemplo@email.com).'); 
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.'); 
      return;
    }

    login({ nombre, email });
    alert('¡Usuario registrado con éxito!'); 
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
        <input type="text" placeholder="Nombre (min 3 carac.)" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Email (usuario@email.com)" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña (min 6 carac.)" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default Registro;