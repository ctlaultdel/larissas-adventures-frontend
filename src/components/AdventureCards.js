import "./AdventureCards.css";

import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdventureCards() {
  const navigate = useNavigate();
  const [adventures, setAdventures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          "https://larissas-adventures-backend-180179e43c72.herokuapp.com/adventures"
        )
        .then((response) => {
          const data = response.data.map((obj) => {
            return {
              ...obj,
              img_src: `data:image/jpeg;base64,${obj.img}`,
            };
          });
          setAdventures(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching adventures: ", error);
        });
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    const adventureID = e.target.alt;
    const src = e.target.src;
    navigate("/blog", { state: { adventureID: adventureID, src: src } });
  };

  return (
    <div className="adventures-container">
      <div className="adventures-section">Adventure Cards</div>
      {isLoading && (
        <div className="loading-spinner">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="100"
            visible={true}
          />
        </div>
      )}
      <div className="adventures">
        {adventures.map((adv) => (
          <div key={adv.name} className="adventure-cards">
            {adv.public ? (
              <img
                src={adv.img_src}
                alt={adv.id}
                className="thumbnails"
                onClick={handleClick}
              ></img>
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
