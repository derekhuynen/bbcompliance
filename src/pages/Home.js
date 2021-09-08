import React from 'react'
import '../css/styles.css'
import {allSTR} from "../data/AllSTR";
import {June2021Concerns} from "../data/June2021Concerns";
import {July2021Concerns} from "../data/July2021Concerns";
import {AllCitations} from "../data/AllConcerns";
import {
    JulyCheckIn,
    JulyLicense,
    JulyNoise,
    JulyOccupancy,
    JulySign,
    JulyParking,
    JulyTotalFines,
    JulyAdvertising,
    JuneCheckIn,
    JuneLicense,
    JuneNoise,
    JuneOccupancy,
    JuneOther,
    JuneParking,
    JuneTotalFines, returnArrThing3,
    returnCount,
    returnCount2
} from "../components/Stats";
import {Link} from "react-router-dom";


export default function Home() {


    return (
        <div className={"page_container"}>
            <div className={"content_container"}>
                <h1>Short Term Rentals Stats</h1>
                <h3>Number of STRs: {allSTR.length}</h3>
                <h3>Number of Reports: {June2021Concerns.concat(July2021Concerns).length}</h3>
                <h3>Number of Citations: {returnCount(AllCitations)}</h3>


                <div className={"month_box"}>
                    <h1>June</h1>
                    <div className={"month_header"}>
                        <table className={"stats_table"}>
                            <tr>
                                <td className={"char25"}><h3>Number of Reports:</h3></td>
                                <td><h3 className={"alignCenter"}>{June2021Concerns.length}</h3></td>
                                <td>
                                    <Link to={{
                                        pathname: "/data",
                                        state: {
                                            data2: June2021Concerns,
                                        },
                                    }} ><button className={"right"}>View Data</button></Link>
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Number of Citations:</h3></td>
                                <td><h3 className={"alignCenter"}>{returnCount2(June2021Concerns)}</h3></td>
                                <td>
                                    <Link to="/data"><button className={"right"}>View Data</button></Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={"stats_box"}>
                        <table className={"stats_table"}>
                            <tr>
                                <td className={"char25"}><h4>Noise/Party/Spa:</h4></td>
                                <td><h4>{JuneNoise.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Parking: </h4></td>
                                <td><h4>{JuneParking.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Over Occupancy:</h4></td>
                                <td><h4>{JuneOccupancy.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>No License:</h4></td>
                                <td><h4>{JuneLicense.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>No In-person Check-in:</h4></td>
                                <td><h4>{JuneCheckIn.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Other: </h4></td>
                                <td><h4>{JuneOther.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h1 className={"inline"}>Total Fines:</h1>
                        <h1 className={"inline marginLeft"}>${JuneTotalFines}</h1>
                    </div>

                </div>


                <div className={"month_box"}>
                    <h1>July</h1>
                    <div className={"month_header"}>
                        <table className={"stats_table"}>
                            <tr>
                                <td className={"char25"}><h3>Number of Reports:</h3></td>
                                <td><h3 className={"alignCenter"}>{July2021Concerns.length}</h3></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Number of Citations:</h3></td>
                                <td><h3 className={"alignCenter"}>{returnCount2(July2021Concerns)}</h3></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={"stats_box"}>
                        <table className={"stats_table"}>
                            <tr>
                                <td className={"char25"}><h4>Noise/Party/Spa:</h4></td>
                                <td><h4>{JulyNoise.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Parking: </h4></td>
                                <td><h4>{JulyParking.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Over Occupancy:</h4></td>
                                <td><h4>{JulyOccupancy.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>No License:</h4></td>
                                <td><h4>{JulyLicense.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>No In-person Check-in:</h4></td>
                                <td><h4>{JulyCheckIn.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>No Sign: </h4></td>
                                <td><h4>{JulySign.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Advertising w/o License: </h4></td>
                                <td><h4>{JulyAdvertising.length}</h4></td>
                                <td>
                                    <button className={"right"}>View Data</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        {console.log(returnArrThing3(July2021Concerns))}
                        <h1 className={"inline"}>Total Fines:</h1>
                        <h1 className={"inline marginLeft"}>${JulyTotalFines}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}