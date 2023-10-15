import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const [posts, setPosts] = useState([]); //useState

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(url);
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); //componentDidMount

  return <ul> Post </ul>;
}
