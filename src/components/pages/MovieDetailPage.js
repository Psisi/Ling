import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "../../hoc/withRouter";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import styles from './MovieDetailPage.module.css';

const MovieDetailPage = (props) => {
    const [ movie, setMovie ] = useState({});
    const { theme } = useContext(ThemeContext);
    const themeClass = theme === 'light'? styles.light: styles.dark;

    useEffect(async () => {
        const movieId = props.params.id;
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`);
        setMovie(res.data);
    },[])

    const { title, overview, popularity, poster_path, release_date, revenue, budget, vote_average } = movie;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div className = {themeClass}>
            <div className = {styles.content}>

                <div className = {styles.picture}>
                    <Link to = '/'>&lt; 返回</Link>
                    <img alt='' src = {`${imageBaseUrl}${poster_path}`}/>
                    <h2>前往观看</h2>
                </div>
            </div>
       
            <div className = {styles.details}>

                <div className = {styles.header}>
                    <span className = {styles.name}>{title}</span>
                    <span className = {styles.rating}>{vote_average}/10</span>
                </div>
                <h2>电影简介</h2>
                <h3>{overview}</h3>
                <hr/>
                <div className = {styles.statistic}>
                    <div className = {styles.item}>
                        <span>票房</span>
                        <span>${revenue}</span>
                    </div>
                    <div className = {styles.item}>
                        <span>成本</span>
                        <span>${budget}</span>
                    </div>
                    <div className = {styles.item}>
                        <span>上映日期</span>
                        <span>{release_date}</span>
                    </div>
                    <div className = {styles.item}>
                        <span>人气值</span>
                        <span>{popularity}</span>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default withRouter(MovieDetailPage);
        
        
 