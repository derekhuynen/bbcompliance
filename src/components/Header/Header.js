import React, {useState} from "react";
import '../../css/header.css'
import {Link, useHistory} from "react-router-dom";
import {June2021Concerns} from "../../data/June2021Concerns";
import {July2021Concerns} from "../../data/July2021Concerns";




export default function Header(){
    const history = useHistory();

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
                            data2: (June2021Concerns.concat(July2021Concerns))
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