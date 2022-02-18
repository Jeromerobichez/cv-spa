import React from "react";
/* import CvTitle from './CvTitle' */
import CvDetails from './CvDetails'
import {proArray, educationArray} from './data'
import './cv.css'

const CvRight = ({pro, education}) => {
console.log("pro is", pro)
console.log("education is", education)
    return (
        <>
       <h1> Jérôme Robichez</h1>
<div>Developpeur Web (JS, React, Node.js)
A la recherche d’un poste de développeur web.</div>

        <h2>Expérience professionnelle : </h2>
    
        {pro.map((item, i) => 
            <CvDetails item={item} /> )} 

           <h2>Education :</h2>
           {education.map((item, i) => 
            <CvDetails item={item} /> )} 
            </>
    )
}
export default CvRight;
