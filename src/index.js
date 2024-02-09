import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5} />
    <StarRating
      size={24}
      color="red"
      defaultRating={3}
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
    />
    <Test />
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>
        This movie was rated <b>{movieRating}</b> stars
      </p>
    </div>
  );
}
