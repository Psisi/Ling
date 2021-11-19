import React, { Component } from 'react';
import ButtonGroup from '../components/Button/ButtonGroup';
import Search from '../components/Search';
import Card from '../components/Card';
import styles from './HomePage.module.css';
import img from '../../src/flame.png';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[]
        };
    }
    onDataChange = (data) => {
        this.setState({movies: data? data.slice(0,10) : []});
    }
    render() {
        return(
            <div>
                <Search/>
                <div className={styles.popularmovies}>
                    <span><img src={img}/>鱿鱼游戏</span>
                    <span><img src={img}/>扫黑风暴</span>
                    <span><img src={img}/>失控玩家</span>
                    <span><img src={img}/>绝命毒师</span>
                    <span><img src={img}/>速度与激情9</span>
                    <span><img src={img}/>全裸导演</span>
                    <span><img src={img}/>灵媒</span>
                    <span><img src={img}/>进击的巨人</span>
                    <span><img src={img}/>浴血黑帮</span>
                    <span><img src={img}/>黑寡妇</span>  
                </div>
                <ButtonGroup onDataChange = {this.onDataChange} />
                <div className = {styles['movie-list']}>
                    {this.state.movies.map((movie, index) => (
                        <Card key={movie.id} title={movie.title} image={movie.poster_path} id ={movie.id} order={index+1}/>
                    ))}
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
                        <span>新加坡</span>
                        <span>泰国</span>
                        <span>中国香港特别行政区</span>
                        <span>马来西亚</span>
                        <span>印度</span>
                        <span>菲律宾</span>
                        <span>捷克</span>
                        <span>匈牙利</span>
                        <span>南非</span>
                        <span>澳大利亚</span>
                        <span>英国</span>
                        <span>以色列</span>
                        <span>斯洛伐克</span>
                        <span>俄罗斯</span>
                        <span>冰岛</span>
                        <span>立陶宛</span>
                        <span>罗马尼亚</span>
                        <span>墨西哥</span>
                        <span>希腊</span>
                        <span>阿根廷</span>
                        <span>加拿大</span>
                        <span>德国</span>
                        <span>日本</span>
                        <span>瑞士</span>
                        <span>巴西</span>
                        <span>土耳其</span>
                        <span>比利时</span>
                        <span>意大利</span>
                        <span>韩国</span>
                        <span>西班牙</span>
                        <span>荷兰</span>
                        <span>哥伦比亚</span>
                        <span>乌克兰</span>
                        <span>美国</span>
                        <span>瑞典</span>
                        <span>法国</span>
                        <span>葡萄牙</span>
                        <span>波兰</span>

                        </div>
                    </div>
                    <div className={styles.types}>
                        <div className={styles.type}>类型</div>
                        <div className={styles['all-types']}>
                        <span className={styles.active}>全部类型</span>
                        <span>剧情</span>
                        <span>喜剧</span>
                        <span>惊悚</span>
                        <span>动作</span>
                        <span>爱情</span>
                        <span>犯罪</span>
                        <span>动画</span>
                        <span>记录</span>
                        <span>冒险</span>
                        <span>恐怖</span>
                        <span>科幻</span>
                        <span>奇幻</span>
                        <span>悬疑</span>
                        <span>家庭</span>
                        <span>传记</span>
                        <span>短片</span>
                        <span>音乐</span>
                        <span>历史</span>
                        <span>战争</span>
                        <span>运动</span>
                        <span>歌舞</span>
                        <span>同性</span>
                        <span>真人秀</span>
                        <span>儿童</span>
                        <span>西部</span>
                        <span>脱口秀</span>
                        <span>灾难</span>
                        <span>情色</span>
                        <span>古装</span>
                        <span>武侠</span>
                        <span>舞台艺术</span>
                        <span>黑色电影</span>
                        <span>Adult</span>
                        <span>Reality-TV</span>
                        <span>戏曲</span>
                        <span>Game-show</span>
                        <span>纪录片-</span>
                        <span>鬼怪</span>
                        <span>News</span>
                        <span>荒诞</span>

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
}
export default HomePage;