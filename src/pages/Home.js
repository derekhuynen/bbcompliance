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



const HeadersJune = ["Noise/Party","Parking","No License","Over Occupancy","Spa after 10pm","No In-person Check-in","Delinquent TOT"]
const HeadersJuly = ["Noise/Party","Parking","Over Occupancy","No In-person Check-in","Spa after 10pm","No Exterior Sign","Advertising","No License"]

export default function Home() {


    return (
        <div className={"page_container"}>
            <div className={"content_container"}>
                <h1>Short Term Rentals Stats</h1>
                <h3>2021 June-July</h3>
                <h3>Number of STRs: {allSTR.length}</h3>
                <h3>Number of Reports: {June2021Concerns.concat(July2021Concerns).length}</h3>
                <h3>Number of Citations: {returnCount(AllCitations)}</h3>
                {MonthSummary({month: "June 2021", arr:  June2021Concerns, headers: HeadersJune})}
                {MonthSummary({month: "July 2021", arr:  July2021Concerns, headers: HeadersJuly})}

            </div>
        </div>
    )
}