import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/reels.css";
import ReelsFeed from "./../../components/ReelsFeed";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food/foodItems", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setVideos(response.data.foodItems);
      })
      .catch(() => {
        console.log("Error in fetching Food Items");
      });
  }, []);

  return <ReelsFeed items={videos} />;
};

export default Home;
