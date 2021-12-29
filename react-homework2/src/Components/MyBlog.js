import React, { Component } from "react";
import Project from "./Project";
import Tags from "./Tags";
import img from "../../src/portugal2.jpg";

class MyBlog extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="main">
                        <Project 
                            topic = "Seville, a beautiful ancient city in Spain"
                            intro = "One of the filming locations of Game of Thrones"
                            content = "There are the third largest cathedral in the world, the charming Muslim-style Seville Palace, and my favorite charming Plaza of Spain . Seville is also famous all over the world for its unique ethnic characteristics, such as beautiful gypsy music, passionate flamenco dances and grand traditional folk festivals. Feel free to stroll on the streets of this city, I believe you will fall in love with it. "
                            date = "Posted by Ling on August 10, 2018"
                        />
                        <hr/>
                        <Project
                            topic = "London, my favorite city"
                            intro = "Sailing on the river Thames, passing Tower Bridge"
                            content = "London is an amazing city that combines classic and modern very well. I stayed in this city for four days. It was too short. I really want to go there again."
                            date = "Posted by Ling on September 18, 2017"
                        />  
                    </div> 
                    <Tags value = "Let's go" img= {img}/>
                </main>
            </div>
        )
    
    }
}
export default MyBlog;