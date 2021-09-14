import React from "react"
import '../css/propertyCard.css'




export default function PropertyCard(props){



    return (

        <div className={"property_card"} onClick={() => props.show(false)}>

        </div>
    )
}