import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [posts, setPost] = useState([]);
  //   console.log(posts);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log("couldn't fetch the data", err));
  });
  return (
    <div>
      <h1>This is useEffect example with API call.</h1>
      <h2>
        We are going to fetch data from JSON Placeholder and display the data
      </h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
