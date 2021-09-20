import React, {useEffect, useState} from 'react'
import '../css/styles.css'

import {June2021Concerns} from '../data/June2021Concerns'
import {July2021Concerns} from '../data/July2021Concerns'
import DisplayData from "../components/DisplayData2";
import DropDown from '../components/DropDown'
import {useLocation} from "react-router-dom";
import 'react-dropdown/style.css';
import {AllData, MonthArray, UniqueHeaders} from "../components/Stats";
import {February2021} from "../data/JS/February2021";
import {March2021} from "../data/JS/March2021";
import {April2021} from "../data/JS/April2021";
import {June2021} from "../data/JS/June2021";
import {July2021} from "../data/JS/July2021";
import {August2021} from "../data/JS/August2021";

const basicHeaders = [{key: "DateEntered", value: "Data"},{key: "Disposition", value: "Disposition"}, {key: "ConcernAddress", value: "Address"},{key: "ConcernType", value: "Complaint"}, {key: "CitationFineTotal", value: "Fine"}];
const AllMonth = [{key: "All", value: AllData}, {key: "February", value: February2021}, {key: "March", value: March2021}, {key: "April", value: April2021},{key: "June", value: June2021},{key: "July", value: July2021},{key: "August", value: August2021}]



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
    const [data, setData] = useState(location.state.data2 ? location.state.data2 : AllData);
    const [inputFieldValue, setInputFieldValue] = useState("");
    const [topic, setTopic] = useState(location.state.topic ? location.state.topic : "All");
    const [fine, setFine] = useState(location.state.fine ? location.state.fine : "All");
    const [month, setMonth] = useState(pickMonth());


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    function pickMonth(){
        const temp = location.state.month ? location.state.month : "All"

        const result =  AllMonth.find((month)=>{
            console.log(month)
            return month.key === temp
        })

        return result.key
    }


    return(
        <div className={"page-container"}>


            <div className={"drop-down-data"}>
                <div className={"drop-down-name"}>Month:</div>
                <DropDown menu={AllMonth} setTopic={setData} placeholder={month}/>
            </div>

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
                    <DropDown menu={UniqueHeaders} setTopic={setTopic} placeholder={topic}/>
                </div>

                <div className={"drop-down-data"}>
                    <div className={"drop-down-name"}>Citation</div>
                    <DropDown menu={[{key: "All", value: "All"},{key: "Yes", value: "Yes"},{key: "No", value: "No"}]} setTopic={setFine} placeholder={fine}/>
                </div>
            </div>



            <DisplayData data={getFilteredRowsBetter(data,inputFieldValue,topic,fine)} headers={basicHeaders} canShow={true}/>
        </div>
    )
}