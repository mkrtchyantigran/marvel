import { Component } from "react";

import "./charInfo.scss";



import MarvelService from "../../services/MarvelService.js"
import Spinner from "../spinner/Spinner.js";
import Error from "../error/Error.js";
import Skeleton from "../skeleton/skeleton.js";

export default class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false
  }

    marvelService = new MarvelService();


   

    componentDidMount () {
      this.updateChar();
    }

    componentDidUpdate(preveProps) {
      if(this.props.charId !== preveProps.charId) {
        this.updateChar();
      }
    }



      updateChar = () => {
        const {charId} = this.props

        
        if(!charId) return;

        this.onCharLoading();
        this.marvelService
        .getCharacter(charId)
        .then(this.onCharLoaded)
        .catch(this.onError)


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



  render() {
    const {char, loading, error} = this.state;

        const iSkeleton =  char|| loading || error ? null : <Skeleton />
        const isError = error ? <Error /> : null;
        const isLoading = loading ? < Spinner /> : null;
        const isContent = !(loading || error || !char) ? < View char={char} /> : null;


    return (

      <div className="char_info">
        {iSkeleton}
        {isError}
        {isLoading}
        {isContent}
      </div>
    );
  }
}

const View = ({char}) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle = {"objectFit" : "cover" };
  if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
    imgStyle = {"objectFit" : "contain" }
  }

  return (
    <>
             <div className="char_basics">
          <img src={thumbnail} alt="Thor" style={imgStyle} />
          <div>
            <div className="char_info-name">{name}</div>
            <div className="char_btns">
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
                target="blank"
                rel="noreferrer"
              >
                <div className="inner">wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="char_descr">
         {description}
        </div>
        {
          comics.length > 0 ? 
          <>
             <div className="char_comics">Comics: </div>

             <ul className="char_comics-lsit">
                {
                  comics.map((comic, index) => {
                    if(index > 10) return
                    return (
                      <li className="char_comics-item">
                        <a 
                        href={`${comic.resourceURL} ? apikey=7a2f90270b6303fe8a6acd07672c5bba`}
                        target="_blank"
                        rel="noreferrer"
                        >
                          {comic.name}
                        </a>
                        
                      </li>
                    )
                  })
                }
            </ul>

          </>
          :
         <p style={{ marginTop: 16, fontWeight: "bold"}}>There is no comics with this character </p>
        }
    </>
  )
}

