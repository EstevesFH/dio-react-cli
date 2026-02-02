import { useNavigate } from 'react-router-dom';
import { IHeader } from '../../types';
import { Button } from '../Button';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Wrapper, BuscarInputContainer, Row} from './styles';

const Header = ({autenticado}: IHeader) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" alt="Logo da dio" style={{ height: '25px' }}/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <input placeholder='Buscar...' style={{ 
                  background: 'transparent',
                  border: 0,
                  width: '100%',
                  color: '#FFFFFF',
                  outline: 'none'
                }}/>
               </BuscarInputContainer>
                <p style={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: '18px', lineHeight: '25px', color: '#FFFFFF', marginRight: '12px' }}>Live Code</p>
                <p style={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: '18px', lineHeight: '25px', color: '#FFFFFF' }}>Global</p>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <>
                  <img src={user?.image || "https://avatars.githubusercontent.com/u/157969020?v=4"} alt={user?.nome || "Usuário"} style={{ 
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid #FFFFFF',
                    marginRight: '12px'
                  }}/>
                  <p onClick={handleLogout} style={{ 
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#FFFFFF',
                    cursor: 'pointer'
                  }}>Sair</p>
                </>
              ) : (
              <>
                <a href="/" style={{ 
                  fontFamily: 'Open Sans',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: '#FFFFFF',
                  marginRight: '12px',
                  textDecoration: 'none'
                }}>Home</a>
                <Button title="Entrar" onClick={() => navigate('/login')}/>
                <Button title="Cadastrar" onClick={() => navigate('/cadastro')}/>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
