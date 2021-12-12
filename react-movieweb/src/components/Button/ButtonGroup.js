import React, { Component } from 'react';
import Button from './Button';
import axios from 'axios';
import styles from './ButtonGroup.module.css';

class ButtonGroup extends Component {
    componentDidMount() {
        this.onClickOnShowing();
    }

    onClickOnShowing = async() => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        const movies = res.data.results;
        this.props.onDataChange(movies);
    }
    onClickOnPopular = async() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        const movies = res.data.results;
        this.props.onDataChange(movies);
    }
    onClickOnLatest = async() => {
        const url = `https://api.themoviedb.org/3/movie/latest?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        const movies = res.data.results;
        this.props.onDataChange(movies);
    }
    onClickOnTopRated = async() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`;
        const res = await axios.get(url);
        const movies = res.data.results;
        this.props.onDataChange(movies);
    }

    render() {
        return (
            <div>
                <div className = {styles['btn-group']}>
                    <Button primary onClick = {this.onClickOnShowing}>正在上映</Button>
                    <Button onClick = {this.onClickOnPopular}>最受欢迎</Button>
                    <Button onClick = {this.onClickOnLatest}>最新电影</Button>
                    <Button onClick = {this.onClickOnTopRated}>最受好评</Button>
                </div>
            </div>
        )
    }
}
export default ButtonGroup;