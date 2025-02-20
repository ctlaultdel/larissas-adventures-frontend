import "./Blog.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

function Blog() {
  const { adventureID, src } = useLocation().state;
  const [blog, setBlog] = useState({ content: [] });

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          "https://larissas-adventures-backend-180179e43c72.herokuapp.com/blogs",
          {
            headers: { "Adventure-ID": adventureID },
          }
        )
        .then((response) => {
          const data = response.data;
          data.content = data.content.map((c) => {
            return {
              ...c,
              fig_src: `data:image/jpeg;base64,${c.figure}`,
            };
          });
          setBlog(data);
        })
        .catch((error) => {
          console.log("Error fetching blog data: ", error);
        });
    };

    fetchData();
  }, [adventureID]);

  return (
    <div>
      <img src={src} alt={adventureID} className="main-img"></img>
      <div className="title-container">
        <header>{blog.title}</header>
        <p>{blog.publication_date}</p>
      </div>
      <div className="content-container">
        {blog.content.map((c) => (
          <div key={c.id}>
            <div className="paragraphs">{parse(c.text)}</div>
            <div>{c.figure && <img src={c.fig_src} alt={c.id}></img>}</div>
            <div className="captions">{parse(c.caption)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
