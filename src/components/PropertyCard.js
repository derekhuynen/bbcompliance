import React, {useEffect, useState} from "react"
import '../css/propertyCard.css'
import {allCitations} from '../data/JS/allCitations'
import {currencyFormat} from "./Stats";


export default function PropertyCard(props) {

    const [loaded, setLoaded] = useState(false);
    const [moreData, setMoreData] = useState();


    useEffect(() => {
        search(props.property.ConcernAddress)
    }, []);


    function search(address) {
        let result = {};
        allCitations.forEach((item) => {
            if (item.ConcernAddress === address) {
                result = item
            }
        })
        setMoreData(result)
        setLoaded(true)
    }


    function display(data) {

        return (
            <div className={"citation-container"}>
                {data.Citations.map((citation,index) => {
                        return (
                            <div className={"citations"} key={index}>
                                <div className={"citation"}>
                                    <h4>Date: {citation.DateEntered}</h4>
                                    <h4>Complaint: {citation.ConcernType}</h4>
                                    <h4>Fine: {currencyFormat(citation.CitationFineTotal,2)}</h4>
                                </div>
                                <p>
                                    Description: {citation.ConcernDescription}
                                </p>
                            </div>

                        )
                    }
                )}
            </div>
        )
    }


    return (

        <div className={"property_card"} onClick={() => props.show(props.property)}>
            <h4>Address: {props.property.ConcernAddress}</h4>

            {loaded ? display(moreData) : null}

        </div>
    )
}