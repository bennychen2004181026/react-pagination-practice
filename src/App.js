import './App.css';
import './components/Posts'
import Post from './components/Posts';
import Pagination from './components/Pagination';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]); //useState
  const [loading, setLoading] = useState(true); //inital loading state is true
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1); //current page state
  const postPerPage = 10; //10 posts per page
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

  //using array slice method to get posts of current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  if (loading) {
    return <div> Loading... </div>;
  }
  return (
    <div className="container">
      <h1>Blogs</h1>
      <Post posts={currentPagePosts} />
      <Pagination />

    </div>
  );
}

export default App;
