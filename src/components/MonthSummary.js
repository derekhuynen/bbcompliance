import React from 'react'
import {Link} from "react-router-dom";
import {
    returnCitations,totalFines,filterArray,filterArrayCitation
} from "./Stats";




export default function MonthSummary(props){



    function eachRow(header,arr) {
        return(
            <tr>
                <td className={"char25"}><h4>{header}:</h4></td>
                <td><h4 className={"alignCenter"}>{arr.length}</h4></td>
                <td><h4 className={"alignCenter"}>{filterArrayCitation(arr,header).length}</h4></td>
                <td>
                    <Link to={{
                        pathname: "/data",
                        state: {
                            data2: arr,
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
                    {eachRow("Number of Reports",props.arr)}
                    {eachRow("Number of Citations",returnCitations(props.arr))}
                </table>
            </div>
            <div className={"stats_box"}>
                <table className={"stats_table"}>
                    <tr>
                        <th></th>
                        <th>Reports</th>
                        <th>Citations</th>
                    </tr>


                    {props.headers.map((header)=>{
                        return eachRow(header,filterArray(props.arr,header))
                    })}
                </table>
            </div>
            <div>
                <h1 className={"inline"}>Total Fines:</h1>
                <h1 className={"inline marginLeft"}>${totalFines(props.arr)}</h1>
            </div>
        </div>
    )
}