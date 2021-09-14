import React from 'react'
import {Link} from "react-router-dom";
import {
    returnCitations, totalFines, filterArrayCitation, filterArray, currencyFormat
} from "./Stats";




export default function MonthSummary(props){

    function summaryRow(header,arr,fine) {
        return(
            <tr>
                <td className={"char25"}><h4>{header}:</h4></td>
                <td><h4 className={"alignCenter"}>{arr.length}</h4></td>
                <td>
                    <Link to={{
                        pathname: "/data",
                        state: {
                            data2: props.arr,
                            fine: fine
                        },
                    }} ><button className={"right"}>View Data</button></Link>
                </td>
            </tr>
        )
    }


    function eachRow(header,arr) {
        return(
            <tr>
                <td className={"char25"}><h4>{header}:</h4></td>
                <td><h4 className={"alignCenter"}>{filterArray(arr,header).length}</h4></td>
                <td><h4 className={"alignCenter"}>{filterArrayCitation(arr,header).length}</h4></td>
                <td>
                    <Link to={{
                        pathname: "/data",
                        state: {
                            data2: arr,
                            topic: header
                        },
                    }} ><button className={"right"}>View Data</button></Link>
                </td>
            </tr>
        )
    }



    return(
        <div className={"month_box"}>


            <h1>{props.month}</h1>
            <div className={"month_header"}>
                <table className={"stats_table"}>
                    {summaryRow("Number of Reports",props.arr,"All")}
                    {summaryRow("Number of Citations",returnCitations(props.arr),"Yes")}
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
            <div>
                <h1 className={"inline"}>Total Fines:</h1>
                <h1 className={"inline marginLeft"}>{currencyFormat(totalFines(props.arr),2)}</h1>
            </div>
        </div>
    )
}