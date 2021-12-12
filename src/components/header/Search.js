import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../src/search.png';
import styles from './Search.module.css';

const Search = () => {
    const searchMovieRef = useRef();
    let navigate = useNavigate();

    const handleSearch = async() => {
        const keyword = encodeURIComponent(searchMovieRef.current.value);
        navigate(`/search-detail?keyword=${keyword}`);
        searchMovieRef.current.value = '';
    }


    return (
        <div className = {styles.search}>
            <input ref = { searchMovieRef } type='text' placeholder='影片/导演/演员/分类/介绍、支持中英文' />
            <button onClick = { handleSearch }><img src= {img}/></button>
        </div>
    )
}
export default Search;