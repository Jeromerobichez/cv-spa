import React from "react";

const CvInfos = ({data}) => {

    return (
        <>
         <div>
        <div>{data.name}</div>
        <div>{data.birthDate}</div>
        <div>{data.residence}</div>
        <div>{data.phone}</div>
        <div>{data.mail}</div>
    </div></>
    )
}
export default CvInfos;
