import React from 'react'
import '../css/styles.css'
import {allSTR} from "../data/AllSTR";
import {June2021Concerns} from "../data/June2021Concerns";
import {July2021Concerns} from "../data/July2021Concerns";
import {AllCitations} from "../data/AllConcerns";
import MonthSummary from "../components/MonthSummary";
import {
    returnCount
} from "../components/Stats";



const HeadersJune = ["Noise/Party","Parking","Spa after 10pm","Over Occupancy","No License","No In-person Check-in","Delinquent TOT"]
const HeadersJuly = ["Parking","Noise/Party","Over Occupancy","Spa after 10pm","Advertising without a License","No In-person Check-in","No Licence","No Exterior Sign"]

export default function Home() {


    return (
        <div className={"page_container"}>
            <div className={"content_container"}>
                <h1>Short Term Rentals Stats</h1>
                <h3>Number of STRs: {allSTR.length}</h3>
                <h3>Number of Reports: {June2021Concerns.concat(July2021Concerns).length}</h3>
                <h3>Number of Citations: {returnCount(AllCitations)}</h3>
                {MonthSummary({month: "June", arr:  June2021Concerns, headers: HeadersJune})}
                {MonthSummary({month: "July", arr:  July2021Concerns, headers: HeadersJuly})}

            </div>
        </div>
    )
}