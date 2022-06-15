import React from "react";
import SlideShow from "./SlideShow";

const MyList = (props) => {   
     
    return (
        <ul className="items">
            {props.travelList.map(list => {
                return ( 
                    <li key = {list.key} className="item"> 
                        <h3>{list.title}</h3>
                        <SlideShow images= {list.images}/>
                    </li>
                )
                })
            }
        </ul>
    )
}
export default MyList;