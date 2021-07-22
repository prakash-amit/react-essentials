import './App.css';

function AuthorizedComponent() {
  return (
    <h1>This is authorized data.</h1>
  );
}

function RegularComponent() {
  return (
    <h1>This is regular data.</h1>
  );
}

//a component using method
function App(props) {
  return (
    <>
    {props.authorized ? <AuthorizedComponent /> : <RegularComponent />}
    </>
  );
}

export default App;
