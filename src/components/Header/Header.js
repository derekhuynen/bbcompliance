import React from "react";
import '../../css/header.css'
import {Link} from "react-router-dom";
import {June2021Concerns} from "../../data/June2021Concerns";
import {July2021Concerns} from "../../data/July2021Concerns";
import {allData} from "../Stats";




export default function Header(){

    return(
        <div className='header'>
            <div className={"brand"}>
                <h1>Big Bear Lake</h1>
            </div>

            <div className={"linkContainer"}>
                <div className={"links"}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={"links"}>
                    <Link to={{
                        pathname: "/data",
                        state: {
                            data2: (allData)
                        },
                    }} >Data</Link>
                </div>


                <div className={"headerLeft"}>
                    <div className={"number"}>

                    </div>
                </div>
            </div>
        </div>

    )
}