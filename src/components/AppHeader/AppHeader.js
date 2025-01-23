import { Component } from "react";
import "./appHeader.scss";


export default class AppHeader extends Component {
  
  render() {
    return (
        <header className="app_header">
          <h1 className="app_title">
            <a href="/#">
              <span>Marvel </span>information Portal
            </a>
          </h1>
          <nav className="app_menu">
            <ul>
              <li>
                <a href="/#">Characters</a>
              </li>
              /
              <li>
                <a href="/#">Comics</a>
              </li>
            </ul>
          </nav>
        </header>
    );
  }
}