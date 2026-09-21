import { Routes, Route, Link } from 'react-router-dom';
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
} from '@azure/msal-react';
import AuthButtons from './components/AuthButtons.jsx';
import Home from "./pages/Home.jsx";
import ProtectedPage from './pages/ProtectedPage.jsx';
import ApiPage from './pages/ApiPage.jsx';

export default function App() {
    return (
       <>
        <h1>React + Microsoft Entra ID</h1>
        <AuthButtons />
        <nav>
            <Link to="/">Inicio</Link> |{' '}
            <Link to="/protegida">Zona protegida</Link>
        </nav>

        <AuthenticatedTemplate>
            <p>Usuario autenticado.</p>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
            <p>Debe iniciar sesión para acceder al contenido protegido.</p>
        </UnauthenticatedTemplate>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protegida" element={<ProtectedPage />} />
            <Route path="/api" element={<ApiPage />} />
        </Routes>
       </>
      );
    }