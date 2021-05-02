import React from 'react'


export default function LongText(props){
    return(
        <textarea
            id = {props.id}
            className="LongText"
            name = {props.name}
            rows ={props.row}
            cols={props.cols}
            style={props.style}
            placeholder = {props.placeholder}
            onChange={props.onChange}
            disabled = {props.disabled}
            value={props.value}
        /> 
    )
}