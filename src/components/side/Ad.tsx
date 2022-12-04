import { Component } from "solid-js";
import AdImage from "../../assets/images/ad.png";

export const Ad: Component = () => {
  return (
    <div class="pt-3">
      <h5>Ad</h5>
      <a href="#">
        <img class="img-fluid" src={AdImage} alt="Warning: This is an ad!" />
      </a>
    </div>
  );
};
