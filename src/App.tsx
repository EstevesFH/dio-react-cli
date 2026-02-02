import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { RecuperarSenha } from './pages/RecuperarSenha'
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/feed" element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          } />
        </Routes >
      </Router>
    </AuthProvider>
  );
}

export default App;
