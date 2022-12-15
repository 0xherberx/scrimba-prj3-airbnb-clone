import React from "react"
import star from "../star_1.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    console.log(props)
    //const katie_photo = "./" + props.img
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={props.coverImg} alt="card"></img>
            <div className="card--rating">
                <img className="card--star" src={star} alt="star"></img>
                <span>{props.stats.rating}</span><span className="card--country">({props.stats.reviewCount})·{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--price">
                <span className="card--price_dollars">From ${props.price}</span><span>/ person</span>
            </p>            
        </section>
    )
}