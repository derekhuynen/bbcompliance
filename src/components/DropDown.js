import React, {useState} from 'react'
import '../css/dropdown.css'


export default function DropBox(props){

    const [placeholder, setPlaceholder] = useState(props.menu[0]);
    const [show, setShow] = useState(false);


    function onclick(item){
        console.log(item)
        setPlaceholder(item);
        props.setTopic(item)
    }

    function menu(){
        return(
            <div className={"menu"} onClick={() => setShow(!show)}>
                {props.menu.map((item)=> {

                    return (
                        <div className={"menuItem"} onClick={() => onclick(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }

    return(
        <div className={"buttonKinda"} onClick={() => setShow(!show)} >
            {placeholder}
            {show ? menu() : console.log(false)}
        </div>

    )
}