import React, { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, auth } from "../backend/firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer " style={{backgroundColor:"rgb(119, 145, 161)"}}>
        <h1>Add a Candidate</h1>
        <div className="inputGp">
          <label> Name:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> School Program:</label>
          <textarea
            placeholder="e.g Software engineering..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button  className="btn border rounded-pill bg-light w-50 h-25 d-center ms-5 justify-content-center"  onClick={createPost}> Add Candidate</button>
      </div>
    </div>
  );
}

export default CreatePost;