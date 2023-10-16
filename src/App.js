import './App.css';
import './components/Posts'
import Post from './components/Posts';
import Pagination from './components/Pagination';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]); //useState
  const [loading, setLoading] = useState(true); //inital loading state is true
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(url);
        setLoading(false);
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); //componentDidMount

  if (loading) {
    return <div> Loading... </div>;
  }
  return (
    <div className="App">

      <Post />
      <Pagination />

    </div>
  );
}

export default App;
