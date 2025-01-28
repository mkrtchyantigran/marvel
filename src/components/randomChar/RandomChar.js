import { Component } from "react";
import MarvelService from "../../services/MarvelService.js"
import Spinner from "../spinner/Spinner.js";
import Error from "../error/Error.js";

import "./randomChar.scss";

import mjolnir from "../../resources/img/mjolnir.png"

export default class RandomChar extends Component {

  state = {
    char: {},
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }


  componentWillUnmount () {
    
  }
  
  onError = () => {
    this.setState({error: true, loading: false})
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  }

  onCharLoading = ( ) => {
    this.setState({loading: true})
  }

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelService
    .getCharacter(id)
    .then(this.onCharLoaded)
    .catch(this.onError);
  }

  render() {
    const { char , loading, error } = this.state;
    
    const isError = error ? <Error /> : null;
    const isLoading = loading ? < Spinner /> : null;
    const isContent = !(loading || error) ? < View char={char} /> : null;

    return (
      <div className="randomchar">
      
      {isLoading}
      {isContent}

        <div className="randomchar_static">
          <p className="randomchar_title">
            Random character for today!
            Do you want to get to know him better?
          </p>
          <p className="randomchar_title">
            Or choose another one
          </p>
          <button
            className="button button_main"
            onClick={this.updateChar}
          >
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar_decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {

  const { name, description, thumbnail, homepage, wiki } = char;

  let imgStyle = {"objectFit" : "cover" };
  if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
    imgStyle = {"objectFit" : "contain" }
  }

  return (
    <div className="randomchar_block">
      <img
       src={thumbnail}
       alt={name} 
       className="randomchar_img" 
       style={imgStyle}
      />
      <div className="randomchar_info">
        <p className="randomchar_name">{name}</p>
        <p className="randomchar_descr">{description}</p>
        <div className="randomchar_btns">
          <a
            href={homepage}
            className="button button_main"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inner">homepage</div>
          </a>
          <a
            href={wiki}
            className="button button_secondary"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inner">wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
}