import Header from './components/Header';
import './App.css';
import Routes from './routes/Router';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default App;
