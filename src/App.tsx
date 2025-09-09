import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';
import { Container } from './components/Container';


export function App() {
    return <>
        <Container>
            <Heading>LOGO</Heading>
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