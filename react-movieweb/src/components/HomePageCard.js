import React from "react";
import { Link } from 'react-router-dom';
import styles from './HomePageCard.module.css';

const HomePageCard = (props) => {
    const { image, date, rating, id } = props;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <Link to = {`/movie-detail?id=${id}`}>
            <div className = {styles.card}>
                <img alt='' src={`${imageBaseUrl}${image}`}/>
                <div className = {styles.date} >
                    <span>{date}</span>
                </div>
                <div className = {styles.rating}>
                    <span>{rating}</span>
                    <span>/10</span>
                </div>
            </div>
        </Link>
    );
}
export default HomePageCard;