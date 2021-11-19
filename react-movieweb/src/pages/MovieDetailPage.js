import React, { Component } from 'react';
import { withRouter } from '../hoc/withRouter';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './MovieDetailPage.module.css';

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  async componentDidMount() {
    const movieId = this.props.params.id;
    const res = await axios.get (`https://api.themoviedb.org/3/movie/${movieId}?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1`);
    this.setState({movie: res.data});
  }

  render() {
    const {title, overview, popularity, poster_path, release_date, revenue, budget, vote_average} = this.state.movie;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    return (
      <div className = {styles.content}>

        <div className = {styles.picture}>
          <Link to="/">&lt; 返回</Link>
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
    )
  }
}

export default withRouter(MovieDetailPage);