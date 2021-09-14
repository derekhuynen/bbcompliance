import React, {useEffect, useState} from "react"
import '../css/propertyCard.css'
import {AllCitations} from '../data/AllConcerns'





export default function PropertyCard(props) {

    const [loaded, setLoaded] = useState(false);
    const [moreData, setMoreData] = useState();


    useEffect(() => {
        search(props.property.ConcernAddress)
    }, []);


    function search(address) {
        let result = {};
        AllCitations.forEach((item)=>{
            if(item.ConcernAddress === address){
                result = item
            }
        })
        setMoreData(result)
        setLoaded(true)
    }


    function display(data) {

        return (
            <div>
                {data.Citations.map((citation)=>{

                    return citation.ReferenceNumber

                    }
                )}
            </div>
        )
    }



return (

    <div className={"property_card"} onClick={() => props.show(false)}>
        <h4>Address: {props.property.ConcernAddress}</h4>
        <p>Date: {props.property.DateEntered}, Status: {props.property.Status}</p>
        <p>Reference Number: {props.property.ReferenceNumber}</p>
        <p>Description: {props.property.ConcernDescription}</p>

        {loaded ? display(moreData) : null}

    </div>
)
}