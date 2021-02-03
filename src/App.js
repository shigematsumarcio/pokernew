import { useState } from 'react';
import './App.css';
import {Login} from './Components/Login'

function App() {

  const [screen, setScreen] = useState(()=>Login)
  const View = screen;

  return (
    <div className="App">
      <View setScreen={setScreen} />
    </div>
  );
}

export default App;
