import "./Blog.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

function Blog() {
  const location = useLocation();
  const [blog, setBlog] = useState({ content: [] });
  const [adventure, setAdventure] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const fetchData = async () => {
      // adventure data
      axios
        .get(
          `https://larissas-adventures-backend-180179e43c72.herokuapp.com/adventures?${searchParams}`
        )
        .then((response) => {
          const data = response.data.map((obj) => {
            return {
              ...obj,
              img_src: `data:image/jpeg;base64,${obj.img}`,
            };
          });
          setAdventure(data[0]);
        })
        .catch((error) => {
          console.log("Error fetching adventure data: ", error);
        });

      // blog data
      axios
        .get(
          `https://larissas-adventures-backend-180179e43c72.herokuapp.com/blogs?${searchParams}`
        )
        .then((response) => {
          const data = response.data[0];
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
  }, [location]);

  return (
    <div>
      <img
        src={adventure.img_src}
        alt={adventure.name}
        className="main-img"
      ></img>
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
