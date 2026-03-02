import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar' 
import App from './pages/App'
import Registro from './pages/Registro'
import Acerca from './pages/Acerca'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Navbar /> {}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)