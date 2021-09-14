import React, {useState} from 'react'
import '../css/styles.css'

import {June2021Concerns} from '../data/June2021Concerns'
import {July2021Concerns} from '../data/July2021Concerns'
import DisplayData from "../components/DisplayData2";
import DropDown from '../components/DropDown'
import {useLocation} from "react-router-dom";
import 'react-dropdown/style.css';

const basicHeaders = [{key: "DateEntered", value: "Data"},{key: "Disposition", value: "Disposition"}, {key: "ConcernAddress", value: "Address"},{key: "ConcernType", value: "Complaint"}, {key: "CitationFineTotal", value: "Fine"}];
const HeadersJune = ["All","Noise/Party","Parking","Spa after 10pm","Over Occupancy","No License","No In-person Check-in","Delinquent TOT"]


const getFilteredRows = (rows, filterKey, other) => {
    return rows.filter((row) => {
        return Object.values(row).some((s) =>
            ("" + s).toLowerCase().includes(filterKey.toLowerCase()) && ("" + s).toLowerCase().includes(other.toLowerCase())
        );
    });
};



const filterSearch = (row, filterKey) => {
    return Object.values(row).some((s) =>
        ("" + s).toLowerCase().includes(filterKey.toLowerCase()));

}

const filterTopic = (row, other) => {
    if(other === "All"){
        return true
    }
    return row.ConcernType === other;
}

const filterFine = (row, fine) => {
    if(fine === "All"){
        return true
    }

    if(fine === "Yes"){
        return row.CitationFineTotal > 0;
    }else{
        return row.CitationFineTotal === 0;
    }

}


const getFilteredRowsBetter = (rows, filterKey, topic,fine) => {
    return rows.filter((row) => {
        return (filterSearch(row, filterKey) && filterTopic(row, topic) && filterFine(row, fine))
    });
};


export default function Data(){
    const location = useLocation()
    const [data, setData] = useState(location.state.data2);
    const [headers, setHeaders] = useState (basicHeaders)
    const [inputFieldValue, setInputFieldValue] = useState("");
    const [topic, setTopic] = useState("All");
    const [fine, setFine] = useState("All");





    return(
        <div className={"page-container"}>
            <button onClick={()=>{setData(June2021Concerns.concat(July2021Concerns))}}>ALL</button>
            <button onClick={()=>{setData(June2021Concerns)}}>JUNE</button>
            <button onClick={()=>{setData(July2021Concerns)}}>JULY</button>


            <div>
                <input
                    value={inputFieldValue}
                    onChange={(e) => {
                        setInputFieldValue(e.target.value);

                    }}
                />
            </div>
            <div className={"drop-down-data"}>
                <div className={"drop-down-name"}>ConcernType</div>
                <DropDown menu={HeadersJune} setTopic={setTopic}/>
            </div>

            <div className={"drop-down-data"}>
                <div className={"drop-down-name"}>Citation</div>
                <DropDown menu={["All","Yes","No"]} setTopic={setFine}/>
            </div>


            <DisplayData data={getFilteredRowsBetter(data,inputFieldValue,topic,fine)} headers={headers}/>
        </div>
    )
}