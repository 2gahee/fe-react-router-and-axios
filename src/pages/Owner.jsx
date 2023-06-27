import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Owner = () => {
    const navigate = useNavigate();
    const { ownerId } = useParams();
    const [article, setArticle] = useState([]);
  
    useEffect(() => {
        axios 
        .get(`https://guestbook.jmoomin.com/${ownerId}/articles `)
        .then((res)=> {
            console.log(res);
            setArticle(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);


  return (
    <>
      <h1>{ownerId}님의 방명록</h1>

      {article.length ? (
        <ul>
          {article.map((element) => {
            return (
              <li>
                {<Link to={`/articles/${element.id}`}>{element.title}</Link>}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>방명록이 없습니다.</p>
      )}

      <button onClick={() => navigate(`/${ownerId}/create`)}>
        방명록 남기기
      </button>
    </>
  );
};

export default Owner;

