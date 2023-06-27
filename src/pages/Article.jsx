import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);


  const handleDeleteClicked = () => {
    axios
      .delete(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then(() => {
        navigate(-1);
      });
  };

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
      .then((res) => {
        console.log(res);
        setArticle(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return article === null ? (
    <p>로딩중</p>
  ) : (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>

      <button onClick={() => navigate(`/articles/${articleId}/edit`)}>
        수정하기
      </button>
      <button onClick={handleDeleteClicked}>제거하기</button>
    </>
  );
};

export default Article;