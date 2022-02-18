import React from "react";
import './cv.css'

const CvDetails = ({item}) => {
console.log("item dans cvDeatails :", item)
    return (
        <>
       

      
        <div>
        <h3>{item.title}</h3>
        <h3>{item.entity} <span>{item.date}</span></h3>
        <span>{item.details}</span>

        </div>
       
        </>
      
    )
}
export default CvDetails;
