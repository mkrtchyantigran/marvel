import { Component } from "react";



import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

import "./charList.scss";
import MarvelService from "../../services/MarvelService";



export default class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        onRequestLoading: false,
        error: false,
        offset: 210, // max limit 1560
        charEnded: false
    }

    
    marvelService = new MarvelService();
    
    componentDidMount() {
        this.onRequest()
    }
    
    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.onError);
    }
    
    onCharListLoading = () => {
        this.setState({
            onRequestLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }
        this.setState(({ charList, offset }) => {
            return {
                charList: [...charList, ...newCharList],
                loading: false,
                onRequestLoading: false,
                offset: offset + 9,
                charEnded: ended
            }
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    renderItems(arr) {
        const items = arr.map(({id, thumbnail, name}) => {
            let imgStyle = {"objectFit" : "cover" };
            if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
              imgStyle = {"objectFit" : "contain" }
            }

            return (
                <li
                    className="char_item"
                    key={id}
                    onClick={() => this.props.onCharSelected(id)}
                  >
                    <img src={thumbnail} alt={name} style={imgStyle} />
                    <div className="char_name"></div>
                </li>
            )
        })

        return (
            <ul className="char_grid">
                {items}
            </ul>
        );
    }

    

    render () {
        const {
            charList,
            loading, 
            error, 
            onRequestLoading, 
            offset,
            charEnded
        } = this.state
        const items = this.renderItems(charList)

        const isError = error ? <Error /> : null;
        const isLoading = loading ? < Spinner /> : null;
        const isContent = !(loading || error) ? items : null;

        return (
            <div className="char_list">
                {isError}
                {isLoading}
                {isContent}

                { 
                    charEnded ? null : 

                    <button 
                        className="button button_main button_long"
                        onClick={() => this.onRequest(offset)}
                        disabled={onRequestLoading}
                    >
                        <div className="inner" >
                            {charEnded ? "No more characters": "" }
                            load more
                        </div>
                    </button>
                }
                
            </div>
        )
    }
}