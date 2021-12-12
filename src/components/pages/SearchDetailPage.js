import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';
import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from '../../hoc/withRouter';
import { Link, useSearchParams } from 'react-router-dom';
import SearchCard from '../header/SearchCard';
import styles from './SearchDetailPage.module.css';

const SearchDetailPage = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieKeyword = searchParams.get('keyword');
    const [ movies, setMovies ] = useState([]);
    const { theme } = useContext(ThemeContext);
    const themeClass = theme === 'light'? styles.light : styles.dark;

    useEffect(async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1&include_adult=false&query=${movieKeyword}`;
        const res = await axios.get(url);
        const searchResults = res.data.results;
        setMovies(searchResults);
    }, [])

    return (
        <div className = {themeClass}>
            <div className = {styles.content}>
                <Link to='/'>&lt; 返回</Link>

                <h3>搜索"{movieKeyword}",找到{movies.length}部作品</h3>
                <div className = {styles.card}>
                    {movies? movies.map(movie => (
                        <SearchCard key = {movie.id} title = {movie.title} image = {movie.poster_path} id = {movie.id} date = {movie.release_date} rating = {movie.vote_average} />
                    )) : "没找到任何电影"}
                </div>
            </div>
        </div>
    )
}
export default withRouter(SearchDetailPage);