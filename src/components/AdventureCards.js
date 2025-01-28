import "./AdventureCards.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AdventureCards() {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://127.0.0.1:5000/adventures")
        .then((response) => {
          const data = response.data.map((obj) => {
            return {
              ...obj,
              img_src: `data:image/jpeg;base64,${obj.img}`,
            };
          });
          setAdventures(data);
        })
        .catch((error) => {
          console.log("Error fetching adventures: ", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="adventures-container">
      <div className="adventures-section">Adventure Cards</div>
      <div className="adventures">
        {adventures.map((adv) => (
          <div key={adv.name} className="adventure-cards">
            {adv.public ? (
              <a href={adv.url}>
                <img
                  src={adv.img_src}
                  alt={adv.name}
                  className="thumbnails"
                ></img>
              </a>
            ) : (
              <img
                src={adv.img_src}
                alt={adv.name}
                className="thumbnails"
              ></img>
            )}
            <div className="name">{adv.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdventureCards;
