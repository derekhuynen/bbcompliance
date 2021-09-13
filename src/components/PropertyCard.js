import React from "react"




export default function PropertyCard(props){



    return (

        <div onClick={() => props.show(false)}>
            {props.property.ConcernAddress}
            {props.property.DateEntered}
            {props.property.Disposition}
        </div>
    )
}