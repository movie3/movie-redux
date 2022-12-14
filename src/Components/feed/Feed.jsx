import Post from "./post/Post";
import Share from "./share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import PageHeader from '../page-header/PageHeader'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(false);

  async function getPosts() {
    let response = await axios.get('http://127.0.0.1:8000/api/getposts');
    // console.log(response.data);
    setPosts(response.data);
  }
  useEffect(() => {
    getPosts();
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])


  return (
    <>
    <PageHeader>
        Post your feedback !
    </PageHeader>
    <div className="feed">
      <div className="feedWrapper">
        <Share posts={posts} setPosts={setPosts}/>
        {posts?.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      </div>
    </>
  );
}
