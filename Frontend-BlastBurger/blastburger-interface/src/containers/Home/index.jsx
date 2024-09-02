import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import { Banner, Container } from './styles'

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                <CategoriesCarousel />

                <div>Carrossel produtos</div>

            </Container>
        </main>
    )
}