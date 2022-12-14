import "./post.css";
// import { MoreVert } from "@material-ui/icons";
import { Users } from "../../../dummyData";
import { useEffect, useState } from "react";
import { Comment, FavoriteBorder, MoreVertOutlined } from "@mui/icons-material";
import Comments from "../comments/Comments";
import axios from "axios";

export default function Post({ post }) {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false);
  const [user, setUser] = useState({});

  async function getUser(id) {
    let response = await axios.get(`http://127.0.0.1:8000/api/userInfo/${id}`);
    setUser(response.data);
  }

  useEffect(() => {
    getUser(post.id)
  }, [])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.user_img}
              alt=""
            />
            <span className="postUsername">
              {user.first_name}
            </span>
            <span className="postDate">{new Date(post.created_at).toString()}</span>
          </div>
          <div className="postTopRight">
            <MoreVertOutlined />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.post}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorder onClick={likeHandler} className="likeIcon" />
            <span className="postLikeCounter">{like} people like it!</span>
          </div>

          <div className="postBottomRight">
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <Comment />
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
        {commentOpen && <Comments post_id={post.id} />}
      </div>
    </div>
  );
}