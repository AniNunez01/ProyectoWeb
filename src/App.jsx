import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  };

  const mapasData = [
    { src: 'haven.jpg', alt: 'Haven' },
    { src: 'pearl.jpg', alt: 'Pearl' },
    { src: 'sunset.jpg', alt: 'Sunset' },
    { src: 'ascent.jpg', alt: 'Ascent' },
    { src: 'icebox.png', alt: 'Icebox' },
    { src: 'split.jpg', alt: 'Split' },
    { src: 'breeze.jpg', alt: 'Breeze' },
    { src: 'lotus.jpg', alt: 'Lotus' },
    { src: 'bind.jpg', alt: 'Bind' },
  ];

  return (
    <Router>
      <header>
        <div className='barras'>
          <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'>☰</button>
        </div>
        <nav id='menu' className='desplegable'>
          <img src="/VALORANT.png" alt="Logo Valorant" className="logo" />
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/agentes">Agentes</Link></li>
            <li><Link to="/mapas">Mapas</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/mapas" element={<Mapas mapas={mapasData} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <ul>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Soporte</li>
            <li>Acerca de nosotros</li>
          </ul>
        </div>
      </footer>
    </Router>
  );
}

function Inicio() {
  return (
    <div className="inicio-section">
      <h1>Inicio</h1>
      <p>Valorant es un shooter táctico en primera persona de estilo hero shooter, desarrollado y publicado por Riot Games...</p>
      <img src="valorant1.png" className="ImagenInicio" alt="Valorant Game" />
    </div>
  );
}

function Agentes() {
  return (
    <div className="agentes-section">
      <h1>Agentes de Valorant</h1>
      <div>
        <img src="/skye3.png" className="skye" alt="Skye" />
        <h3>Skye</h3>
        <p>La posibilidad de destruir Luz guía no era lo suficientemente relevante...</p>
      </div>
      <div>
        <img src="/reyna.png" className="reyna" alt="Reyna" />
        <h3>Reyna</h3>
        <p>El rendimiento del destello de Reyna no está a la altura de nuestras expectativas...</p>
      </div>
      <div>
        <img src="/yoru.png" className="yoru" alt="Yoru" />
        <h3>Yoru</h3>
        <p>Yoru es un agente un tanto complejo...</p>
      </div>
    </div>
  );
}

function Mapas({ mapas }) {
  return (
    <div className="mapas-section">
      <h1>Mapas</h1>
      <div className="mapas-grid">
        {mapas.map((mapa, index) => (
          <img key={index} src={mapa.src} alt={mapa.alt} />
        ))}
      </div>
    </div>
  );
}

function Login() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    contrasenaConfirmar: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.contrasena || !formData.contrasenaConfirmar) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    if (formData.contrasena !== formData.contrasenaConfirmar) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    setError('');
    alert('Iniciando sesión...');
  };

  return (
    <div className="registro-section">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} required />
        <input type="password" name="contrasenaConfirmar" placeholder="Confirmar Contraseña" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;
