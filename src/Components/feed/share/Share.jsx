import "./share.css";
// import { Room, EmojiEmotions} from "@material-ui/icons"
// import { EmojiEmotionsOutlined, LabelImportant, PermMediaOutlined, RoomOutlined } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true" alt="" />
          {/* <input placeholder="What's in your mind Safak?" className="shareInput"/> */}
          <textarea placeholder="What's in your mind?" className="shareInput"/>
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
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}