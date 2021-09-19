import React from 'react'
import {Link} from "react-router-dom";
import {
    returnCitations, totalFines, filterArrayCitation, filterArray, currencyFormat
} from "./Stats";




export default function MonthSummary(props){
    const totalCitations = returnCitations(props.arr)
    const totalReportsLength = props.arr.length;


    function summaryRow(header,arr,fine) {
        return(
            <tr>
                <td className={"char25"}><h4>{header}:</h4></td>
                <td><Link to={{
                    pathname: "/data",
                    state: {
                        data2: props.arr,
                        fine: fine
                    },
                }} ><h4 className={"alignCenter"}>{arr.length}</h4></Link></td>
            </tr>
        )
    }


    function eachRow(header,arr) {
        const reports = filterArray(arr,header).length
        const citations = filterArrayCitation(arr,header).length

        return(
            <tr>
                <td className={"char25"}><h4>{header}:</h4></td>
                <td><Link to={{
                    pathname: "/data",
                    state: {
                        data2: arr,
                        topic: header
                    },
                }} ><h4 className={"alignCenter"}>{reports} ({((reports/totalReportsLength)*100).toFixed(0)}%)</h4></Link></td>
                <td><Link to={{
                    pathname: "/data",
                    state: {
                        data2: arr,
                        topic: header,
                        fine: "Yes"
                    },
                }} ><h4 className={"alignCenter"}>{citations} ({((citations/totalCitations.length)*100).toFixed(0)}%)</h4></Link></td>
            </tr>
        )
    }



    return(
        <div className={"month_box"}>


            <h1>{props.month}</h1>
            <div className={"month_header"}>
                <table className={"stats_table"}>
                    {summaryRow("Number of Reports",props.arr,"All")}
                    {summaryRow("Number of Citations",totalCitations,"Yes")}
                </table>
            </div>
            <div className={"stats_box"}>
                <table className={"stats_table"}>
                    <tr>
                        <th/>
                        <th>Reports</th>
                        <th>Citations</th>
                    </tr>


                    {props.headers.map((header)=>{
                        return eachRow(header,props.arr)
                    })}
                </table>
            </div>
            <div className={"info-bottom"}>
                <div className={"fines"}>
                    <h3 className={"inline"}>Total Fines:</h3>
                    <h3 className={"inline marginLeft"}>{currencyFormat(totalFines(props.arr),2)}</h3>
                </div>
                <div className={"source"}>
                    <p>**All data is from the Big Bear Lake City website**</p>
                </div>

            </div>
        </div>
    )
}