import React from "react";
import '../css/monthCard.css'


export default function MonthCard(props){


    return(

        <div className={"MonthCardContainer"}>
            <div className={"MonthCardUpper"}>
                <h2>{props.month}</h2>
            </div>
            <div className={"MonthCardLower"}>
                <div className={"MonthCardLowerHeader"}>

                </div>
                <div className={"MonthCardLowerData"}>
                    Reports: {props.reports}
                    Citations: {props.citations}
                </div>
            </div>
            <div className={"MonthCardFine"}>
                <h3>{props.fines}</h3>
            </div>
        </div>

    )
}