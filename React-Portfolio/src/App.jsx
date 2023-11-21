import { Outlet } from 'react-router-dom';
import  Header  from './components/Header';
import  Navigation  from './components/Navigation';
import  Footer  from './components/Footer';
import { backgroundImage } from './assets';
// import BackgroundVideo from './components/BackgroundVideo'

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <main className = "mx-3" style={{backgroundColor: "#ebf2fa"}}>
    <Outlet />
    {/* <BackgroundVideo /> */}
    </main>
    <Footer />
    </>
  );
}

export default App;

