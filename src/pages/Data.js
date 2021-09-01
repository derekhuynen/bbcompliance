import React,{useState} from 'react'
import '../css/styles.css'

import {June2021Concerns} from '../data/June2021Concerns'
import {July2021Concerns} from '../data/July2021Concerns'
import DisplayData from "../components/DisplayData";
import {useLocation} from "react-router-dom";
const basicHeaders = [{key: "ReferenceNumber", value: "ID"}, {key: "DateEntered", value: "Data"},{key: "Disposition", value: "Disposition"}, {key: "ConcernAddress", value: "Address"},{key: "ConcernType", value: "Complaint"}, {key: "CitationFineTotal", value: "Fine"}];



const getFilteredRows = (rows, filterKey) => {
    return rows.filter((row) => {
        return Object.values(row).some((s) =>
            ("" + s).toLowerCase().includes(filterKey.toLowerCase())
        );
    });
};



export default function Data(){
    const location = useLocation()
    const [data, setData] = useState(location.state.data2);
    const [headers, setHeaders] = useState (basicHeaders)
    const [inputFieldValue, setInputFieldValue] = useState("");


    return(
        <div className={"page-container"}>
            <button onClick={()=>{setData(June2021Concerns.concat(July2021Concerns))}}>ALL</button>
            <button onClick={()=>{setData(June2021Concerns)}}>JUNE</button>
            <button onClick={()=>{setData(July2021Concerns)}}>JULY</button>
            <input
                value={inputFieldValue}
                onChange={(e) => {
                    setInputFieldValue(e.target.value);

                }}
            />
            <DisplayData data={getFilteredRows(data,inputFieldValue)} headers={headers}/>
        </div>
    )
}