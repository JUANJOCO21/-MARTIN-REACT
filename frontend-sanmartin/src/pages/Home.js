import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          margin: '0 0 0.5rem 0'
        }}>Subestación San Martín</h1>
        <p style={{ fontSize: '1.25rem', margin: 0 }}>Tu plataforma de compras eléctricas</p>
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
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
          <li><Link to="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
        </ul>
      </nav>

      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '2rem',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#333',
            marginBottom: '1.5rem'
          }}>Bienvenido a San Martín</h2>
          <p style={{
            color: '#333',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>Explora nuestra amplia gama de equipos eléctricos de alta calidad</p>
          <Link
            to="/login"
            style={{
              backgroundColor: '#0052cc',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '600'
            }}
          >
            Iniciar Sesión
          </Link>
        </div>
      </main>
      
      <footer style={{
        backgroundColor: '#0052cc',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        width: '100%'
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Subestación San Martín - CEDENAR. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;