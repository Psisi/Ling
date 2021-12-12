import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
    const { id, title, order, image } = props;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

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
export default Card;
    
