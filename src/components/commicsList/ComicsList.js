import { Component } from "react";

import "./comicsList.scss";

import uw from "../../resources/img/UW.png"
import xMen from "../../resources/img/x-men.png"

export default class ComicsList extends Component {
  render() {
    return (
      <div className="comics_list">
        <ul className="comics_grid">
          <li className="comics_item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics   _item-img" />
              <div className="comics_item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics_item-price">9.99$</div>
            </a>
          </li>
          <li className="comic_item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics_item-img" />
              <div className="comics_item-name">X-Men: Days of Future Past</div>
              <div className="comics_item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics_item-img" />
              <div className="comics_item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics_item-price">9.99$</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics_item-img" />
              <div className="comics_item-name">X-Men: Days of Future Past</div>
              <div className="comics_item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics_item-img" />
              <div className="comics_item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics_item-price">9.99$</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics_item-img" />
              <div className="comics_item-name">X-Men: Days of Future Past</div>
              <div className="comics_item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics_item-img" />
              <div className="comics_item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics_item-price">9.99$</div>
            </a>
          </li>
          <li className="comics_item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics_item-img" />
              <div className="comics_item-name">X-Men: Days of Future Past</div>
              <div className="comics_item-price">NOT AVAILABLE</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}