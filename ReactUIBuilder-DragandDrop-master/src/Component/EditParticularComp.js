import React, { Component } from 'react'
import '../style.css'
import { FaRegTimesCircle } from "react-icons/fa";
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames'

class EditParticularComp extends Component {
  state = {
    editdetails: "",
  }
  componentDidMount() {
    debugger
    this.setState({
      editdetails: this.props.editdetails
    })
  }
  minimizeslider = () => {
    this.props.minimizeslider()
  }
  Texboxonchange = (event) => {
    this.state.editdetails[event.currentTarget.id] = event.currentTarget.value
    this.setState({
      editdetails: this.state.editdetails
    })
  }
  savebutton = (event) => {
    this.props.savedata(this.state.editdetails)
  }
  render() {
    const { editdetails } = this.state
    return (
      <div className="sidemenu" style={{padding:"70px 16px 0px 16px"}}>
        <div container xs={12} direction="row" style={{ display: "flex", padding: "4px", justifyContent: "space-between" }}>
          <div style={{fontSize: "16px" ,color:"#fff" }}>{"Edit" + " " + editdetails["componentname"] }</div>
          <div><a id="filteicon" onClick={this.minimizeslider} ><FaRegTimesCircle size={18} color={'#fff'} cursor='pointer' /></a></div>
        </div>
        <div class="container" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          {editdetails["componentname"] == "Textbox" || editdetails["componentname"] == "Longtext" || editdetails["componentname"] == "Button" ?
            <div class="row" style={{ fontSize: "14px" }} >
              <div class="col-md-4" style={{ display: "flex" }}>Title</div>
              <div class="col-md-8"><input className="textboxstyle" type="text" id="title" name="title" value={editdetails.title} onChange={this.Texboxonchange} /> </div>
            </div>
            : <div></div>
          }
          {editdetails["componentname"] == "Textbox" || editdetails["componentname"] == "Longtext" ?
            <div class="row" style={{ padding: "8px 0px", fontSize: "14px" }}>
              <div class="col-md-4" style={{ display: "flex" }}>Value</div>
              <div class="col-md-8"><input className="textboxstyle" style={editdetails.textboxstyle} type="text" id="value" name="value" value={editdetails.value} onChange={this.Texboxonchange} /></div>
            </div> : <div></div>
          }
          {editdetails["componentname"] == "Textbox" || editdetails["componentname"] == "Longtext" ?
            <div class="row" style={{ padding: "8px 0px", fontSize: "14px" }}>
              <div class="col-md-4" style={{ display: "flex" }}>Placeholder</div>
              <div class="col-md-8"><input className="textboxstyle" style={editdetails.textboxstyle} type="text" id="placeholder" name="placeholder" value={editdetails.placeholder} onChange={this.Texboxonchange} /></div>
            </div> : <div></div>
          }
          {editdetails["componentname"] == "Textbox" || editdetails["componentname"] == "Longtext" ?
            <div class="row" style={{ padding: "8px 0px", fontSize: "14px" }}>
              <div class="col-md-4" style={{ display: "flex" }}>Height</div>
              <div class="col-md-8"><input className="textboxstyle" style={editdetails.textboxstyle} type="text" id="height" name="height" value={editdetails.height} onChange={this.Texboxonchange} /></div>
            </div> : <div></div>
          }
          {editdetails["componentname"] == "Textbox" || editdetails["componentname"] == "Longtext" ?
            <div class="row" style={{ padding: "8px 0px", fontSize: "14px" }}>
              <div class="col-md-4" style={{ display: "flex" }}>Width</div>
              <div class="col-md-8"><input className="textboxstyle" style={editdetails.textboxstyle} type="text" id="width" name="width" value={editdetails.width} onChange={this.Texboxonchange} /></div>
            </div> : <div></div>
          }
          <div><button className="buttonstyle" type="submit" value="Submit" onClick={this.savebutton} style={{ height: "30px", marginTop: "10px" }}>Save</button></div>
        </div>
      </div>
    )
  }
}
export default EditParticularComp