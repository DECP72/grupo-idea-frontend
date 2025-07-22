// config.js
const API_URL = location.hostname.includes("localhost")
  ? "http://localhost:3000/api"  // URL del backend local para pruebas
  : "https://grupo-idea-backend-1.onrender.com/api";  // Producción
