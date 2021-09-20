import React, {useEffect, useState} from "react";
import {allSTR} from '../data/AllSTR'
import DisplayData from "../components/DisplayData";
const basicHeaders = [{key: "STRAddress", value: "Address"}, {key: "InspectionDate", value: "Date"}, {key: "BCA", value: "BCA"},{key: "VRR", value: "VRR"}]

const filter = (rows, filterKey) => {

    return rows.filter((row) => {
        return Object.values(row).some((s) =>
            ("" + s).toLowerCase().includes(filterKey.toLowerCase()));
    });
}

export default function STR() {
    const [data, setData] = useState(allSTR);
    const [inputFieldValue, setInputFieldValue] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={"page-container"} >

            <div className={"drop-down-data"}>
                <div className={"drop-down-name"}>Search: </div>
                <input
                    className={"input_box"}
                    value={inputFieldValue}
                    onChange={(e) => {
                        setInputFieldValue(e.target.value);
                    }}
                />
            </div>
            <DisplayData data={filter(data, inputFieldValue)} headers={basicHeaders}/>
        </div>
    )
}