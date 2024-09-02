import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
    Link
} from './styles'

export function Login() {
    const navigate = useNavigate()
    const schema = yup
        .object({
            email:
                yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),

            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post('/session', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados',
                    success: {
                        render() {
                            setTimeout(() => {
                                navigate('/home')
                            }, 1000); // Adicionando um pequeno atraso para a navegação
                            return 'Seja bem-vindo(a) 👌';
                        }
                    },
                    error: 'Email ou Senha inválidos 🤯'
                }
            );

            const token = response.data.token; // Captura o token da resposta

            if (token) {
                localStorage.setItem('token', token);
            } else {
                console.error('Token não foi encontrado na resposta');
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Blast Burger</span>
                    <br />
                    Acesse com o seu <span> Login e senha</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder="exemplo@email.com" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui</Link></p>
            </RightContainer>
        </Container>
    )
}