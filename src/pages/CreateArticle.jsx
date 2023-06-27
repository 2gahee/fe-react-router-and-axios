import React from "react";
import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateArticle = () => {
  const navigate = useNavigate();
  const { ownerId } = useParams();
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
      .post(`https://guestbook.jmoomin.com/${ownerId}/articles`, {
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
      <h1>{ownerId}님의 방명록</h1>
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
       type="text"
        placeholder="내용"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
      <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
  );
};

export default CreateArticle;