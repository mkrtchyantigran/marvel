import { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import ComicsList from "../commicsList/ComicsList";
import AppBanner from '../AppBanner/AppBanner';
import SingleComic from "../singleComic/singleComic";

import decoration from "../../resources/img/vision.png";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList />
            <CharInfo />
            <ComicsList />
            <AppBanner />
            <SingleComic />
          </div>
          <img src={decoration} alt="vision" className="bg-decoration" />
        </main>
      </div>
    );
  }
}