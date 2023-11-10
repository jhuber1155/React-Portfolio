import { Outlet } from 'react-router-dom';
import  Header  from './components/Header';
import  Navigation  from './components/Navigation';
import  Footer  from './components/Footer';

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <main className = "mx-3">
    <Outlet />
    <Footer />
    </main>
    </>
  );
}

export default App;

