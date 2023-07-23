import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [exuces, setExuces] = useState('')

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
    .then((res) => setExuces(res.data[0].excuse))
  }
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>

      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <h1> {exuces} </h1>
    </div>
    )
}



export default App;
