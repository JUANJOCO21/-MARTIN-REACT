import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate("/bienvenido");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al hacer login", error);
    }
  };

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
          maxWidth: '400px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#333',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#0052cc',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                marginTop: '1rem'
              }}
            >
              Iniciar sesión
            </button>
          </form>
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

export default Login;