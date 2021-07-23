import React, {useState, useEffect} from 'react';
import './App.css';

//a component using method
function App({login}) {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then((response)=> response.json())
    .then(setData);
  },[]);


  if (data )
  {
    return (
      <div>
        <h1>{data.id}</h1>
        <p>{data.login}</p>
        <img alt={data.login} src = {data.avatar_url} />
      </div>
    );
  }
  else {
    return <div>No user available</div>
  }
}

export default App;
