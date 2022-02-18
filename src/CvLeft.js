import React from "react";
import './cv.css'
import Photo from './images/jerome-robichez.png'
import CvInfos from "./CvInfos";
import CvLanguages from "./CvLanguages";
const CvLeft = ({data}) => {
console.log("data is ", data)
    return (
        <>
       <h1>column 1</h1>
    <img src={data.jerome.photo}
    width={100}
    />
    <CvInfos data={data.jerome.leftPart.infos} />
    <CvLanguages data={data.jerome.leftPart.languages} />
   
            </>
    )
}
export default CvLeft;
