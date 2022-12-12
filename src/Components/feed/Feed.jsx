import Post from "./post/Post";
import Share from "./share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
// import PageHeader from '../page-header/PageHeader'

export default function Feed() {
  return (
    <>
    {/* <PageHeader>
        Feed
    </PageHeader> */}
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      </div>
      </>
  );
}
