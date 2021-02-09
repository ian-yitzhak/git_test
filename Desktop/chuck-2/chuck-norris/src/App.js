import React , { useEffect , useState } from 'react';


import './App.css';

const API_URL = 'https://api.chucknorris.io/jokes/random';

function App() {

  const [value , setJoke] = useState('');

  const generateJoke = () => {

    fetch(API_URL)

      .then( res => res.json())

       
      
      .then(data => setJoke(data.value));




  }


  useEffect ( () =>{

    generateJoke();



   

  }, [] )
  return (



    <div className="container-md">

    <div className="jumbotron">


    <h1 className="text-center"> CHUCK-NORRIS-API </h1>

    <h5 className="text-center"> { value } </h5>

         <center> <button onClick ={ generateJoke } class="btn btn-primary" >click me to get a joke </button> </center>






    </div>


    </div>


    
  );
}

export default App;
