import React from "react";

const CvLanguages = ({data}) => {

    return (
        <>
        <h4>Langues </h4>
        {data.map((item) =><div>{item}</div> )}
        
        </>
    )
}
export default CvLanguages;
