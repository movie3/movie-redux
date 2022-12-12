import "./post.css";
// import { MoreVert } from "@material-ui/icons";
import { Users } from "../../../dummyData";
import { useState } from "react";
import { Comment, FavoriteBorder, MoreVertOutlined } from "@mui/icons-material";
import Comments from "../comments/Comments";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false);
  // const [color,setColor] = useState("white")
  

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1 )
    setIsLiked(!isLiked)
    // setColor(isLiked ? "white" : "red")
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertOutlined/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <img className="likeIcon" src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true" onClick={likeHandler} alt="" /> */}
            {/* <img className="likeIcon" src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true" onClick={likeHandler} alt="" /> */}
            <FavoriteBorder onClick={likeHandler} className="likeIcon"  />
            <span className="postLikeCounter">{like} people like it!</span>
             {/* <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <Comment/>
         <span className="postCommentText">{post.comment} comments</span>
          </div> */}
          </div>
          
          <div className="postBottomRight">
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <Comment/>
         <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
             {commentOpen && <Comments />}
      </div>
    </div>
  );
}