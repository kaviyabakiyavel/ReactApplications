import React from 'react'
import '../style/style.css'

export default function Textfield(props) {
    return (
        <input
            className="TextInput"
            type={props.type}            
            onChange={props.onChange}  
            value={props.value}      
            placeholder={props.placeholder}
            onfocus={props.onfocus}
            onblur={props.onblur}
            name={props.name}
            id={props.id}
            style={props.style}
            readonly={props.editable}
            disabled={props.disabled}
            pattern = {props.pattern}
            title = {props.title}
        />
    )
}