import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';


export function App() {
    return <>
        <Container>
            <Logo></Logo>
        </Container>

        <Container>
            <section>MENU</section>
        </Container>

        <Container>
            <section>FORM</section>
        </Container>

        <Container>
            <section>FOOTER</section>
        </Container>
    </>;
}