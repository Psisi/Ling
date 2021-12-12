import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { fetchLatestMovies, fetchTopRateMovies, fetchOnShowingMovies, fetchPopularMovies } from '../../slices/movieSlice';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOnShowingMovies());
    },[])

    return (
        <div className = {styles['btn-group']}>
            <Button primary onClick = {() => dispatch(fetchOnShowingMovies())}>正在上映</Button>
            <Button onClick = {() => dispatch(fetchPopularMovies())}>最受欢迎</Button>
            <Button onClick = {() => dispatch(fetchLatestMovies())}>最新电影</Button>
            <Button onClick = {() => dispatch(fetchTopRateMovies())}>最受好评</Button>
        </div>
    )
}
export default ButtonGroup;