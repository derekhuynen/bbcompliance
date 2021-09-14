import React, {useEffect, useState} from 'react'
import '../css/styles.css'

import {June2021Concerns} from '../data/June2021Concerns'
import {July2021Concerns} from '../data/July2021Concerns'
import DisplayData from "../components/DisplayData2";
import DropDown from '../components/DropDown'
import {useLocation} from "react-router-dom";
import 'react-dropdown/style.css';
import {allData} from "../components/Stats";

const basicHeaders = [{key: "DateEntered", value: "Data"},{key: "Disposition", value: "Disposition"}, {key: "ConcernAddress", value: "Address"},{key: "ConcernType", value: "Complaint"}, {key: "CitationFineTotal", value: "Fine"}];
const AllHeaders = ["Noise/Party","Parking","Spa after 10pm","Over Occupancy","No License","No In-person Check-in","Delinquent TOT","No Exterior Sign","Advertising"]



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
    const [data, setData] = useState((location.state ? location.state.data2 : allData));
    const [inputFieldValue, setInputFieldValue] = useState("");
    const [topic, setTopic] = useState((location.state.topic ? location.state.topic : "All"));
    const [fine, setFine] = useState(location.state.fine ? location.state.fine : "All");


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const buttons = (arr, title) => {
        const style = (data === arr ? "highlight" : "default")

        return <button className={style} onClick={()=>{setData(arr)}}>{title}</button>
    }


    return(
        <div className={"page-container"}>

            {buttons(allData,"ALL")}
            {buttons(June2021Concerns,"JUNE")}
            {buttons(July2021Concerns,"JULY")}




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

            <div className={"drop_down_container"}>
                <div className={"drop-down-data"}>
                    <div className={"drop-down-name"}>ConcernType</div>
                    <DropDown menu={AllHeaders} setTopic={setTopic} placeholder={topic}/>
                </div>

                <div className={"drop-down-data"}>
                    <div className={"drop-down-name"}>Citation</div>
                    <DropDown menu={["All","Yes","No"]} setTopic={setFine} placeholder={fine}/>
                </div>
            </div>



            <DisplayData data={getFilteredRowsBetter(data,inputFieldValue,topic,fine)} headers={basicHeaders}/>
        </div>
    )
}