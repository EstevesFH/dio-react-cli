import { useNavigate } from "react-router-dom";
import { MdEmail } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { Container, Title, Column, TitleRecuperar, SubtitleRecuperar, Row, Wrapper, SuccessMessage } from './styles';

interface IRecuperarFormData {
  email: string;
}

const RecuperarSenha = () => {
    const navigate = useNavigate();
    const [emailEnviado, setEmailEnviado] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<IRecuperarFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: IRecuperarFormData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}`);
            
            if (data.length > 0) {
                // Simulação de envio de email
                // Em produção, aqui chamaria um endpoint para enviar email
                console.log('Email de recuperação enviado para:', formData.email);
                setEmailEnviado(true);
                
                // Após 3 segundos, redireciona para login
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                alert('E-mail não encontrado no sistema.');
            }
        } catch (e) {
            alert('Erro ao processar solicitação. Tente novamente.');
            console.error('Erro:', e);
        }
    };

    const handleVoltarLogin = () => {
        navigate('/login');
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Recupere o acesso à sua conta e continue sua jornada de aprendizado!
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    {!emailEnviado ? (
                        <>
                            <TitleRecuperar>Recuperar Senha</TitleRecuperar>
                            <SubtitleRecuperar>Digite seu e-mail para receber instruções de recuperação</SubtitleRecuperar>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <Button title="Enviar" variant="secondary" type="submit"/>
                            </form>
                            <Row>
                                <p style={{ 
                                    fontFamily: 'Open Sans',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    color: '#E5E044',
                                    cursor: 'pointer'
                                }} onClick={handleVoltarLogin}>Voltar para Login</p>
                            </Row>
                        </>
                    ) : (
                        <SuccessMessage>
                            <h2>✓ E-mail enviado com sucesso!</h2>
                            <p>Verifique sua caixa de entrada para instruções de recuperação de senha.</p>
                            <p>Redirecionando para o login...</p>
                        </SuccessMessage>
                    )}
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { RecuperarSenha }
