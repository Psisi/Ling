import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ButtonGroup from '../components/Button/ButtonGroup';
import Search from '../components/Search';
import Card from '../components/Card';
import styles from './HomePage.module.css';
import img from '../../src/flame.png';
import { ThemeContext } from '../context/ThemeContext';

const HomePage = (props) => {
    
    const movies = useSelector((state) => state.movie.movies.slice(0,10));

    const { theme } = useContext(ThemeContext);
    const themeClass = theme === 'light'? styles.light : styles.dark;

    const popularmoives = ['鱿鱼游戏', '扫黑风暴', '失控玩家', '绝命毒师', '速度与激情9', '全裸导演', '灵媒', '进击的巨人', '浴血黑帮', '黑寡妇']
    const countriesname = ['新加坡', '泰国', '中国香港特别行政区', '马来西亚', '印度', '菲律宾', '捷克', '匈牙利', '南非', '澳大利亚', '英国', 
        '以色列', '斯洛伐克', '俄罗斯', '冰岛', '立陶宛', '罗马尼亚', '墨西哥', '希腊', '阿根廷', '加拿大', '德国', '日本', '瑞士', '巴西', '土耳其',
        '比利时', '意大利', '韩国', '西班牙', '荷兰', '哥伦比亚', '乌克兰', '美国', '瑞典', '法国', '葡萄牙', '波兰']
    const movietypes = ['剧情', '喜剧', '惊悚', '动作', '爱情', '犯罪', '动画', '记录', '冒险', '恐怖', '科幻', '奇幻', '悬疑', '家庭', '传记', '短片', 
        '音乐', '历史', '战争', '运动', '歌舞', '同性', '真人秀', '儿童', '西部', '脱口秀', '灾难', '情色', '古装', '武侠', '舞台艺术', '黑色电影', 
        'Adult', 'Reality-TV', '戏曲', 'Game-show', '纪录片', '鬼怪', 'News', '荒诞']

        return(
            <div className = {themeClass}>
                <Search/>
                <div className={styles.popularmovies}>
                    {popularmoives.map(movie => (
                        <span key={movie}><img src={img}/>{movie}</span>
                    ))}
                </div>
                <ButtonGroup />
                <div className = {styles['movie-list']}>
                    { movies? movies.map((movie, index) => (
                        <Card key={movie.id} title={movie.title} image={movie.poster_path} id ={movie.id} order={index+1}/>
                    )) : "没找到任何电影"}
                </div>
                <div className= {styles['ranking-types']}>
                    <span className={styles['ranking-movietypes']}>
                        <span className={styles.active}>
                            所有影片
                        </span>
                        <span>
                            电影
                        </span>
                        <span>
                            剧集
                        </span>
                    </span>
                    <div className={styles['type-area']}>
                        <div className={styles.area}>地区</div>
                        <div className={styles['all-areas']}>
                            <span className={styles.active}>所有地区</span>
                            {countriesname.map ( country => (
                                <span key={country}>{country}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.types}>
                        <div className={styles.type}>类型</div>
                        <div className={styles['all-types']}>
                            <span className={styles.active}>全部类型</span>
                            {movietypes.map ( type => (
                                <span key = {type}>{type}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles['type-order']}>
                        <div className={styles.order}>排序</div>
                        <div className={styles['all-orders']}>
                            <span className={styles.active}>近期上架</span>
                            <span>评分</span>
                            <span>新片</span>
                            <span>老片</span>
                        </div>
                    </div>
                    <div className={styles['type-subtitle']}>
                        <div className={styles.subtitle}>字幕</div>
                        <div className={styles['all-subtitiles']}>
                            <span className={styles.active}>全部语言</span>
                            <span>中文</span>
                            <span>英文</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}
HomePage.contextType = ThemeContext;
export default HomePage;