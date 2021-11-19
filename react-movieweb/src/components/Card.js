import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

class Card extends Component {
    render() {
        const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
        const {title,image,id,order} = this.props;
        return (
            <Link to = {`/movie-detail/${id}`}>
                <div className = {styles.card}>
                    <img alt="" src={`${imageBaseUrl}${image}`}/>
                    <div>{title}</div>
                    <span>{order}</span>
                </div>
            </Link>
            
        );
    }
}
export default Card;