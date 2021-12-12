import React from "react";
import { Link } from "react-router-dom";
import styles from './SearchCard.module.css';

const SearchCard = (props) => {
    const {title, image, rating, date, id } = props;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const url = encodeURIComponent(`/search-detail?`)

    return (
      
        <div className = {styles.detail}>
            <div className = {styles.picture}> 
                <Link to = {`/movie-detail/${id}?from=/search-detail`}>  
                    <img src = {`${imageBaseUrl}${image}`}/>
                </Link>
                <div className = {styles.header}>
                    <span className = {styles.name}>{title}</span>
                    <span className = {styles.rating}>{rating}/10</span>
                </div>
                <p>上映日期: {date}</p>
                <Link to = {`/movie-detail/${id}?from=search`}>
                    <h2>更多信息</h2>
                </Link>
            </div>
        </div>    
    )
}
export default SearchCard;