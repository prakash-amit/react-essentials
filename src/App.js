import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
    <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
    <p>We serve the most {props.adjective} food around.</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
    <p>Copyright {props.year}</p>
    </footer>
  );
}

//a component using method
function App() {
  return (
    <div className="App">
      <Header name = "Amit"/>
      <Main adjective = "amazing"/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
