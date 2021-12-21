import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { fetchOnPopularMovies, fetchOnLatestMovies, fetchOnTopRateMovies, fetchOnShowingMovies } from '../../slices/movieSlice';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchOnShowingMovies())
    }, [])

    return (    
        <div className = {styles['btn-group']}>
            <Button primary onClick = {() => dispatch(fetchOnShowingMovies())}>正在上映</Button>
            <Button onClick = {() => dispatch(fetchOnPopularMovies())}>最受欢迎</Button>
            <Button onClick = {() => dispatch(fetchOnLatestMovies())}>最新电影</Button>
            <Button onClick = {() => dispatch(fetchOnTopRateMovies())}>最受好评</Button>
        </div>       
    )
}
export default ButtonGroup;