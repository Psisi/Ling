import React, { Component } from "react";


class MyList extends React.Component {
    
    render() {
        
        return (
            <ul className="items">
                {
                    this.props.travelList.map(list => {
                        return ( 
                            <li key = {list.key}> 
                                <h3>{list.title}</h3>
                                <img src= {list.imgsrc}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default MyList;