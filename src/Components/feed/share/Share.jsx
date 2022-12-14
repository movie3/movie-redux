import { useEffect, useState } from "react";
import "./share.css";
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import axios from "axios";
// import { Room, EmojiEmotions} from "@material-ui/icons"
// import { EmojiEmotionsOutlined, LabelImportant, PermMediaOutlined, RoomOutlined } from "@mui/icons-material";

export default function Share({ posts, setPosts }) {

  const [img, setImg] = useState()
  const [post, setPost] = useState('');
  const isAuth = useIsAuthenticated()
  const user = useAuthUser();
  const handleShare = async () => {
    if (post != '' && isAuth()) {
      let response = await axios.post('http://127.0.0.1:8000/api/addpost',
        {
          'user_id': user().id,
          'post': post
        });
      console.log(response.data);
      setPosts([response.data, ...posts]);
    }
  }
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/getUserInfo/${user().id}`)
      .then(res => {
        console.log(res.data.user_img);
        setImg(res.data.user_img);
      }).catch(res => {
        console.log(res);
      })

  }, [])

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={img} alt="" />
          <textarea placeholder="What's in your mind?" value={post} className="shareInput" onChange={(e) => setPost(e.target.value)} />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <button className="shareButton" onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}