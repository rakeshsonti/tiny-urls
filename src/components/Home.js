import '../App.css';
import { Navbar,Container } from 'react-bootstrap';
function Home(){
    
    return (
        <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Tiny Urls</Navbar.Brand>
   
    </Container>
  </Navbar>

        </div>
    )
}
export default Home;