import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { IFormData } from '../../types';
import { useForm } from "react-hook-form";
import { useAuth } from '../../contexts/AuthContext';

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper } from './styles';

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        setLoading(true);
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                login(data[0]);
                navigate('/feed');
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            alert('Erro ao fazer login. Tente novamente.');
            console.error('Erro:', e);
        } finally {
            setLoading(false);
        }
    };

    const handleClickCadastro = () => {
        navigate('/cadastro')
    }

    const handleEsqueciSenha = () => {
        navigate('/recuperar-senha')
    }

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu login</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        placeholder="E-mail" 
                        leftIcon={<MdEmail />} 
                        name="email" 
                        control={control}
                        rules={{ required: true }}
                    />
                    {errors.email && <span style={{ color: '#E4105D', fontSize: '12px' }}>E-mail é obrigatório</span>}
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        leftIcon={<MdLock />} 
                        name="senha" 
                        control={control}
                        rules={{ required: true }}
                    />
                    {errors.senha && <span style={{ color: '#E4105D', fontSize: '12px' }}>Senha é obrigatória</span>}
                    <Button title={loading ? "Carregando..." : "Entrar"} variant="secondary" type="submit"/>
                </form>
                <Row>
                    <p style={{ 
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#E5E044',
                        cursor: 'pointer'
                    }} onClick={handleEsqueciSenha}>Esqueci minha senha</p>
                    <p style={{ 
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#23DD7A',
                        cursor: 'pointer'
                    }} onClick={handleClickCadastro}>Criar Conta</p>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }