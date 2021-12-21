import { useSearchParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './MovieDetailPage.module.css';
import { ThemeContext } from '../context/ThemeContext';

const MovieDetailPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('id');
  const [ movie, setMovie ] = useState({});
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const themeClass = theme === 'light' ? styles.light: styles.dark;

  useEffect(async () => {
    
    const res = await axios.get (`https://api.themoviedb.org/3/movie/${movieId}?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`);
    setMovie(res.data);
  },[])

    const {title, overview, popularity, poster_path, release_date, revenue, budget, vote_average} = movie;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    return (
      <div className = {themeClass}>
        <div className = {styles.content}>

          <div className = {styles.picture}>
            <a onClick={() => navigate(-1)}>&lt; 返回</a>
            <img alt=" " src = {`${imageBaseUrl}${poster_path}`}/>
            <h2>前往观看</h2>
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
      </div>
    )
  
}

export default MovieDetailPage;