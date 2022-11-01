import { useState } from 'react';
import Banner from './components/Banner';
import Collection from './components/Collection';
import Header from './components/Header';
import Slider1 from './components/Slider1';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header count={count} setCount={setCount} />
      <Banner />
      <Slider1 />
      <Collection count={count} setCount={setCount} />
    </div>
  )
}

export default App;
