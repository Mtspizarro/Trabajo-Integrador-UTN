function Acerca() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Documentación del Proyecto</h1>
      <section>
        <h2>Explicación del Proyecto</h2>
        <p>Esta aplicación es un gestor de usuarios básico que demuestra el uso de rutas y estado global en React.</p>
      </section>
      <section>
        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li>React y Vite para el desarrollo.</li>
          <li>React Router para la navegación entre /registro y /acerca.</li>
          <li>Context API para la persistencia del usuario.</li>
        </ul>
      </section>
      <section>
        <h2>Decisiones de Desarrollo</h2>
        <p>Se optó por utilizar LocalStorage dentro del Context para cumplir con el requisito de persistencia al recargar la página.</p>
      </section>
      <section>
        <h2>Observaciones Personales</h2>
        <p>El mayor desafío fue coordinar la estructura de carpetas para el despliegue en Vercel.</p>
      </section>
    </div>
  );
}

export default Acerca;