import React, { useEffect, useState } from 'react'
// import { useContext } from "react";
// import { AuthContext } from "./authContext";
// import { comments } from "../../../dummyData";
import "./comment.css";
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import axios from 'axios';




function Comments({post_id}) {
    // const { currentUser } = useContext(AuthContext);

    const [comment , setComment] = useState('');
    const [comments , setComments] = useState([]);
    const isAuth = useIsAuthenticated()
    const user = useAuthUser();
    const handleComment =async ()=>{
      if(comment != '' && isAuth()) {
        let response = await axios.post('http://127.0.0.1:8000/api/addComment' , 
        {'user_id' : user().id ,
          'post_id' : post_id ,
          'comment' : comment 
        })
        console.log(response.data);
        setComments([response.data , ...comments])
        // console.log(response);
      }
    }

    async function getComments(id) {
      let response = await axios.get(`http://127.0.0.1:8000/api/getComments/${id}`);
      console.log(response.data);
      setComments(response.data);
    }
    useEffect(()=>{
      // console.log("hello");
      getComments(post_id);
    },[])

    const commentss = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];


  return (
   <div className="comments">
      <div className="write">
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="img"/>
        <input type="text" placeholder="write a comment" onChange={(e)=>setComment(e.target.value)} />
        <button onClick={handleComment}>Send</button>
      </div>
      {console.log(comments)}
      {comments?.map((comment) => (
        <div className="comment">
          <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="" className="img"/>
          <div className="info">
            <span>{user().first_name + ' ' + user().last_name}</span>
            <p>{comment.comment}</p>
          </div>
          <span className="date">Now</span>
        </div>
      ))}
    </div>
  );
};

export default Comments
