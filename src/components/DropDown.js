import React, {useState} from 'react'
import '../css/dropdown.css'


export default function DropBox(props) {

    const [placeholder, setPlaceholder] = useState(props.placeholder);
    const [show, setShow] = useState(false);


    function onclick(item) {
        setPlaceholder(item.key);
        props.setTopic(item.value)
    }

    function menu() {
        return (
            <div className={"menu"} onClick={() => setShow(!show)}>
                {props.menu.map((item) => {

                    return (
                        <div className={"menuItem"} onClick={() => onclick(item)}>
                            {item.key}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={"buttonKinda"} onClick={() => setShow(!show)}>
            {placeholder}
            {show ? menu() : console.log(false)}
        </div>
    )
}