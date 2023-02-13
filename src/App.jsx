import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm'
import BoxDisplay from './components/BoxDisplay'

function App() {
  const [boxes, setBoxes] = useState([]);

  const handleCreate = (box) => {
    setBoxes([box, ...boxes]); 
  }

  return (
    <>
    <BoxForm handleCreate={handleCreate}/>
    <BoxDisplay boxes={boxes}/>
    </>
  );
}

export default App;
