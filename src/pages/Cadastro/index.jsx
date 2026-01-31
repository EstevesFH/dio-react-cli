import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleCadastro, SubtitleCadastro, Row, Wrapper, TextoLogin, JaTenhoConta } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            // Verifica se o email já existe
            const { data: usuariosExistentes } = await api.get(`/users?email=${formData.email}`);
            
            if (usuariosExistentes.length > 0) {
                alert('E-mail já cadastrado!');
                return;
            }

            // Cria o novo usuário
            const novoUsuario = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            };

            await api.post('/users', novoUsuario);
            
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
            
        } catch (e) {
            alert('Erro ao realizar cadastro. Tente novamente.');
            console.error('Erro:', e);
        }
    };

    const handleClickLogin = () => {
        navigate('/login');
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            placeholder="Nome completo" 
                            leftIcon={<MdPerson />} 
                            name="nome" 
                            control={control}
                            rules={{ required: true }}
                        />
                        {errors.nome && <span style={{ color: '#E4105D', fontSize: '12px' }}>Nome é obrigatório</span>}
                        
                        <Input 
                            placeholder="E-mail" 
                            leftIcon={<MdEmail />} 
                            name="email" 
                            control={control}
                            rules={{ 
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "E-mail inválido"
                                }
                            }}
                        />
                        {errors.email && <span style={{ color: '#E4105D', fontSize: '12px' }}>
                            {errors.email.message || 'E-mail é obrigatório'}
                        </span>}
                        
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            leftIcon={<MdLock />} 
                            name="senha" 
                            control={control}
                            rules={{ 
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Senha deve ter no mínimo 6 caracteres"
                                }
                            }}
                        />
                        {errors.senha && <span style={{ color: '#E4105D', fontSize: '12px' }}>
                            {errors.senha.message || 'Senha é obrigatória'}
                        </span>}
                        
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <JaTenhoConta>
                            Já tenho conta. <TextoLogin onClick={handleClickLogin}>Fazer login</TextoLogin>
                        </JaTenhoConta>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }
