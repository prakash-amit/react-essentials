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
//{authorized} - object destructuring
function App({authorized}) {
  return (
    <>
    {authorized ? <AuthorizedComponent /> : <RegularComponent />}
    </>
  );
}

export default App;
