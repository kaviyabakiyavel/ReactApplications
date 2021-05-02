import React from 'react'
import { FaRegEdit, FaRegTimesCircle } from "react-icons/fa";
import  '../style.css'

export default function Universalcomp(props) {
    function deletecomp(event) {
        if (event.currentTarget.id == props.ComponentSpec["id"]) {
            const filtereddata = props.data.filter((item) => item.id !== props.ComponentSpec["id"])
            props.deletecomp(filtereddata)
        }
    }
    function editcomp(event) {
        if (event.currentTarget.id == props.ComponentSpec["id"]) {
            props.editcomp(event.currentTarget.id, true)
        }
    }
    if (props.ComponentSpec["componentname"] == "Textbox") {
        return <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={props.ComponentSpec["labelstyle"]}>{props.ComponentSpec["title"]}</div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ cursor: "pointer", color: "blue", padding: "0px 10px" }} id={props.ComponentSpec["id"]} title="Edit" onClick={editcomp}><FaRegEdit /></div>
                    <div style={{ cursor: "pointer", color: "red" }} id={props.ComponentSpec["id"]} onClick={deletecomp} title ="delete"><FaRegTimesCircle /></div>
                </div>
            </div>
            <input
                type={props.ComponentSpec["type"]}
                onChange={props.onChange}
                value={props.ComponentSpec["value"]}
                placeholder={props.ComponentSpec["placeholder"]}
                onfocus={props.onfocus}
                onblur={props.onblur}
                name={props.name}
                id={props.id}
                className="textboxstyle"
                readonly={props.editable}
                disabled={props.disabled}
            />
        </div>
    }
    else if (props.ComponentSpec["componentname"] == "Button") {
        return <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ cursor: "pointer", color: "blue", padding: "0px 10px" }} id={props.ComponentSpec["id"]} onClick={editcomp}><FaRegEdit /></div>
                <div style={{ cursor: "pointer", color: "red" }} id={props.ComponentSpec["id"]} onClick={deletecomp}><FaRegTimesCircle /></div>
            </div>
            <button
                type={props.ComponentSpec["type"]}
                onClick={props.onClick}
                className="buttonstyle"
            >
                {props.ComponentSpec["title"]}
            </button>
        </div>
    }
    else if (props.ComponentSpec["componentname"] == "Longtext") {
        return <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={props.ComponentSpec["labelstyle"]}>{props.ComponentSpec["title"]}</div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ cursor: "pointer", color: "blue", padding: "0px 10px" }} id={props.ComponentSpec["id"]} onClick={editcomp}><FaRegEdit /></div>
                    <div style={{ cursor: "pointer", color: "red" }} id={props.ComponentSpec["id"]} onClick={deletecomp}><FaRegTimesCircle /></div>
                </div>
            </div>
            <textarea
                id={props.id}
                name={props.name}
                rows={props.row}
                cols={props.cols}
                placeholder={props.ComponentSpec["placeholder"]}
                onChange={props.onChange}
                disabled={props.disabled}
                value={props.ComponentSpec["value"]}
                className="longtextstyle"
            />
        </div>

    }
}