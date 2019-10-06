import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  {
      name: 'Mango',
  },
  {
      name: 'Pera',
  },
  {
      name: 'Aguacate',
  },
  {
      name: 'Papaya',
  },
  {
      name: 'Banano',
  },
  {
    name: 'Sandia',
  },
  {
    name: 'Mora',
  },
  {
    name: 'Guanabana',
  },
];
function buttons() {
  return (
    <div>
      <button onClick={e => validation(e)} value={true}>SI</button>
      <button onClick={e => validation(e)} value={false}>No</button>
    </div>
  )
}
function validation(e){
  const responseUser = e.target.value;
  console.log(responseUser);

  console.log('Esta entre estas Mango, Pera, Aguacate, Papaya')
  if(responseUser === 'SI'){
    if(responseUser){
      console.log('Mango')
    } else if(!responseUser){
      console.log('Aguacate')
    }else if (responseUser) {
      console.log('Papaya')
    }else {
      console.log('Pera')
    }
  }
  if(responseUser === 'NO'){
    console.log('Esta entre estas Banano, Sandia, Mora, Guanabana')

  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>UNI.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {data.map(item  => 
        <div >
          <h4>{item.name}</h4>
        </div>
        )}
      </div>
      <button onClick={e => validation(e)} value={true}>SI</button>
      <button onClick={e => validation(e)} value={false}>No</button>
    </div>
  );
}

export default App;
