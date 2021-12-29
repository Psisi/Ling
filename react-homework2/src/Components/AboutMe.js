import React from "react";
import MyList from "./MyList";

const AboutMe = (props) => {
    
    const travelList = [
        {title: 'South Island in 2021', images : [
            {url:'/queenstown.jpg'},
            {url:'/south1.jpg'},
            {url:'/south2.jpg'},
            {url:'/south3.jpg'},
            {url:'/south4.jpg'},
            {url:'/south5.jpg'}
        ], key: '01'},
        {title: 'South Europe in 2018',  images : [
            {url:'/sevilla1.jpg'},
            {url:'/SouthEurope1.jpg'},
            {url:'/SouthEurope2.jpg'},
            {url:'/SouthEurope3.jpg'},
            {url:'/SouthEurope5.jpg'},
            {url:'/SouthEurope6.jpg'}
        ], key: '02'},
        {title: 'North Europe in 2017',images : [
            {url:'/Europe1.jpg'},
            {url:'/Europe2.jpg'},
            {url:'/Europe3.jpg'},
            {url:'/Europe4.jpg'},
            {url:'/Europe5.jpg'},
            {url:'/Europe6.jpg'}
        ], key: '03'},
        {title: 'America in 2016', images : [
            {url:'/america.jpg'},
            {url:'/America1.jpg'},
            {url:'/America2.jpg'},
            {url:'/America3.jpg'},
            {url:'/America4.jpg'},
            {url:'/America5.jpg'}
        ], key: '04'},
        {title: 'Thailand in 2015', images : [
            {url:'/thailand.jpg'},
            {url:'/Thailand1.jpg'},
            {url:'/Thailand2.jpg'},
            {url:'/Thailand3.jpg'},
            {url:'/Thailand4.jpg'},
            {url:'/Thailand5.jpg'}
        ], key: '05'},
        {title: 'Austrila in 2014',
        images : [
            {url:'/austrilia.jpg'},
            {url:'/Austrilia1.jpg'},
            {url:'/Austrilia2.jpg'},
            {url:'/Austrilia3.jpg'},
            {url:'/Austrilia4.jpg'},
            {url:'/Austrilia5.jpg'}
        ], key: '06'},
        {title: 'France in 2013',  
        images : [
            {url:'/France1.jpg'},
            {url:'/France2.jpg'},
            {url:'/France3.jpg'},
            {url:'/France4.jpg'},
            {url:'/France5.jpg'},
            {url:'/castle.jpg'}
        ],  key: '07'},
        {title: 'Italy in 2012', 
        images : [
            {url:'/Italy1.jpg'},
            {url:'/Italy2.jpg'},
            {url:'/Italy3.jpg'},
            {url:'/Italy4.jpg'},
            {url:'/Italy5.jpg'},
            {url:'/Italy6.jpg'}
        ], 
        key: '08'},
    ]
       
    return(
        <div className ="travel-list">
            <h2>Travel Guide</h2>
                <div className = "mylist">
                    <MyList travelList = {travelList}/>
                </div>
            </div>
        )
}

export default AboutMe;