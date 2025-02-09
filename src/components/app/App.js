import { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";

import decoration from "../../resources/img/vision.png";
//pages
import AppBanner  from "../AppBanner/AppBanner";
import ComicsList from "../commicsList/ComicsList";
import SingleComic from "../singleComic/singleComic";

import ErrorBoundary from "../ErrorBoundary/errorBoundary.js";

export default class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <div className="app">
        
        < AppHeader />
       <main>
        <ErrorBoundary>
          < RandomChar />
        </ErrorBoundary>
        <div className="char_content">
          <CharList  onCharSelected={this.onCharSelected}/>
          <ErrorBoundary>
            <CharInfo charId= {this.state.selectedChar}/>
          </ErrorBoundary>
        </div>
        <img src={decoration} alt="vision" className="bg-decoration" />
       </main>
      
      </div>
    );
  }
}