import React from 'react'
import '../css/styles.css'
import {allSTR} from "../data/AllSTR";
import {AllData} from "../components/Stats"
import MonthSummary from "../components/MonthSummary";
import { returnCount2 } from "../components/Stats";
import {April2021, AprilHeaders} from '../data/JS/April2021'
import {August2021, AugustHeaders} from "../data/JS/August2021";
import {February2021, FebruaryHeaders} from "../data/JS/February2021";
import {July2021,JulyHeaders} from "../data/JS/July2021";
import {March2021,MarchHeaders} from "../data/JS/March2021";
import {May2021,MayHeaders} from "../data/JS/May2021";
import {June2021,JuneHeaders} from "../data/JS/June2021";



export default function Home() {


    return (
        <div className={"page_container"}>
            <div className={"content_container"}>
                <h1>Short Term Rentals Stats</h1>
                <h3>2021 February-August</h3>
                <h3>Number of STRs: {allSTR.length}</h3>
                <h3>Number of Reports: {AllData.length}</h3>
                <h3>Number of Citations: {returnCount2(AllData)}</h3>
                {MonthSummary({month: "February", arr:  February2021, headers: FebruaryHeaders})}
                {MonthSummary({month: "March", arr:  March2021, headers: MarchHeaders})}
                {MonthSummary({month: "April", arr:  April2021, headers: AprilHeaders})}
                {MonthSummary({month: "May", arr:  May2021, headers: MayHeaders})}
                {MonthSummary({month: "June", arr:  June2021, headers: JuneHeaders})}
                {MonthSummary({month: "July", arr:  July2021, headers: JulyHeaders})}
                {MonthSummary({month: "August", arr:  August2021, headers: AugustHeaders})}
            </div>
        </div>
    )
}