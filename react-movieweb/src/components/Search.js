import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
    render() {
        return (
        <div className ={styles.search}>
            <input type="text" placeholder="影片/导演/演员/分类/介绍、支持中英文"/> 
    
            <div data-v-61baa0bb="" className = "w-40px h-40px flex-center rounded-full bg-danger cursor-pointer"><span data-v-61baa0bb="" className ="flex-center btn-radio-active text-24px i-icon i-icon-search"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"><path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.2218 33.2218L41.7071 41.7071" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
        </div>
        )
    }
}
export default Search;