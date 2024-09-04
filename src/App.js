import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage name="piyumal" age="10">
        <h2 className='one'>Hello from HomePage</h2>
      </HomePage>
      <HomePage name="nipuna" age="20">
        <button className='btn'>save</button>
      </HomePage>
      <HomePage name="kamal" age="30"/>
    </div>
  );
}

export default App;
