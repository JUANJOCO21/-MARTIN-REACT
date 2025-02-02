import React from "react";

const Bienvenido = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#e6f2ff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{ 
        backgroundColor: '#0052cc',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>
          Subestación San Martín
        </h1>
      </header>

      <nav style={{
        backgroundColor: '#0066ff',
        padding: '0.5rem'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</a></li>
        </ul>
      </nav>

      <main style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '2rem',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#333',
            marginBottom: '1rem'
          }}>¡Bienvenido al Proyecto San Martín!</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#333',
            lineHeight: 1.6
          }}>Has iniciado sesión correctamente.</p>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#0052cc',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Subestación San Martín - CEDENAR. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Bienvenido;