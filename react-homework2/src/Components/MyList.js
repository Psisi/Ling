import React from "react";
import SlideShow1 from "./SlideShow1";

const MyList = (props) => {   
     
    return (
        <ul className="items">
            {props.travelList.map(list => {
                return ( 
                    <li key = {list.key} className="item"> 
                        <h3>{list.title}</h3>
                        <SlideShow1 images= {list.images}/>
                    </li>
                )
                })
            }
        </ul>
    )
}
export default MyList;