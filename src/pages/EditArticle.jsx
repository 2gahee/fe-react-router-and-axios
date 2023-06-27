import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";



const EditArticle = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");



  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    axios
      .put(`https://guestbook.jmoomin.com/articles/${articleId}`, {
        title,
        body,
      })
      .then((e) => {
        console.log(e);
        navigate(-1);
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };
  return (
    <>
      <input
        type="text"
        name="subject"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
        type="text"
        name="content"
        placeholder="내용"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default EditArticle;