import './App.css';
import Header from './component/Header';
import Hero from './screen/Hero';
import Signup from './screen/Signup';
function App() {
  return (
    <div>
      <header ><Header/></header>
      <main>
         <Hero />
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
