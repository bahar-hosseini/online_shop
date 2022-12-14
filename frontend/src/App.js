//External Modules
import { Container } from 'react-bootstrap';

//Inner Modules
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
          <Footer />
        </Container>
      </main>
    </>
  );
};

export default App;
