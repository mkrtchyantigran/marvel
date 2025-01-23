import { Component } from "react";

import "./charList.scss"

import abyys from "../../resources/img/abyss.jpg"
export default class CharList extends Component {
    render() {
        return (
            <div className="char_list">
                <ul className="char_grid">
                    <li className="char_item_selected">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                    <li className="char_item">
                        <img src={abyys} alt="abyys" />
                        <div className="char_name">Abyys</div>
                    </li>
                </ul>
                <button className="button button_main long">
                        <div className="inner">Load More</div>
                </button>
            </div>
        )
    }
}