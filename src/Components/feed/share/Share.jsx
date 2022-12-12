import { useState } from "react";
import "./share.css";
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import axios from "axios";
// import { Room, EmojiEmotions} from "@material-ui/icons"
// import { EmojiEmotionsOutlined, LabelImportant, PermMediaOutlined, RoomOutlined } from "@mui/icons-material";

export default function Share({posts,setPosts}) {

  const [post , setPost] = useState('');
  const isAuth = useIsAuthenticated()
  const user = useAuthUser();
  const handleShare =async ()=>{
    if(post != '' && isAuth()) {
      let response =await axios.post('http://127.0.0.1:8000/api/addpost' , 
      {'user_id' : user().id ,
        'post' : post } ) ;
      console.log(response.data);
      // console.log(render);
      // setRender(!render);
      setPosts([response.data , ...posts]);
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true" alt="" />
          {/* <input placeholder="What's in your mind Safak?" className="shareInput"/> */}
          <textarea placeholder="What's in your mind?" value={post} className="shareInput" onChange={(e)=>setPost(e.target.value)} />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            {/* <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaOutlined htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelImportant htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <RoomOutlined htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsOutlined htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div> */}
            <button className="shareButton" onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}