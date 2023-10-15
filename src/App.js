import './App.css';
import './components/Posts'
import Post from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">

      <Post />
      <Pagination />

    </div>
  );
}

export default App;
