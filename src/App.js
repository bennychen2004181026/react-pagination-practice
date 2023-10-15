import logo from './logo.svg';
import './App.css';
import './components/Posts'
import Post from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post />
        <Pagination />
      </header>
    </div>
  );
}

export default App;
