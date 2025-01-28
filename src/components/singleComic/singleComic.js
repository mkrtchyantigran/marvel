import { Component } from "react";

import "./singleComic.scss";

import xMen from "../../resources/img/x-men.png";

export default class SingleComic extends Component {
  render() {
    return (
      <div className="single-comic">
        <img src={xMen} alt="xMen" className="single-comic_img" />
        <div className="single-comic_info">
          <h2 className="single-comic_name">X-Men: Days of Future Past</h2>
          <p className="single-comic_descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
          <p className="single-comic_descr">144 pages</p>
          <p className="single-comic_descr">Language: en-us</p>
          <p className="single-comic_price">9.99$</p>
        </div>
        <a href="#" className="single-comic_back">Back to all</a>
      </div>
    );
  }
}