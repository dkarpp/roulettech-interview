import logo from './logo.svg';
import './App.css';
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my simple website for Roulettech!</h1>
        <h2>Lets pull some data from our api:</h2>
        <DataDisplay />
      </header>
    </div>
  );
}

export default App;
