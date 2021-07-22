import './App.css';
import restaurant from './restaurant.jpg'

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
    <img src = {restaurant} height = {400} alt = "restaurant table" />
    <ul>
      { 
        props.dishes.map( dish => 
          (<li key = {dish.id}>{dish.title}</li>)
        )
      }
    </ul>
    </section>
  );
}

const dishes = ["sahi paneer","mashroom mashala","nan"];

const dishObjests = dishes.map(
  (dish, i) => { return {id : i, title : dish} }
);


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
      <Main adjective = "amazing" dishes = {dishObjests}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
