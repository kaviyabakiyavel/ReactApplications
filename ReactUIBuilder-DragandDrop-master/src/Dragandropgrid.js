import React, { Component } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
//  import css -- IMP!!!
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import { map } from 'lodash';
import data from './data';
import Universalcomp from './Component/Universalcomp';
import EditParticularComp from './Component/EditParticularComp';
import './style.css'
import cx from 'classnames'
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(RGL);

class Dragandropgrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, minH: 0, maxH: 2 },         // *** -- minH & maxH doesnt effect the grid items
        { i: '2', x: 0, y: 0, w: 1, h: 2, minH: 0, maxH: 2 },
        { i: '3', x: 0, y: 0, w: 1, h: 2, minH: 0, maxH: 2 },
        // { i: '4', x: 0, y: 1, w: 1, h: 2, minH: 0, maxH: 2 }
      ],
      resizeplotly: false,
      sidebar: false,
      mounted: false,
      compactType: null,
      editdetails: "",
    };
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      data: data,
      mounted: true
    })
  }
  Renderchat = (details) => {
     {
      return map(this.state.data, (details, index) => {
        return (
          <div className={cx("item", "reactgriditem")} key={details["id"]} style={{ border: "none", background: details["backgroundColor"] }}>
            <div className='MyDragHandleClassName' style={{ background: details["backgroundColor"], padding: "0px 10px", border: "none", }}>
              <span className="text">
                <Universalcomp
                  ComponentSpec={details}
                  deletecomp={this.deletecomp}
                  data={this.state.data}
                  editcomp={this.editcomp}
                />
              </span>
            </div>
          </div>
        );
      })
    }

  }
  onLayoutChange = (layout) => {
    this.setState({ layout });
  }
  onResize = (layouts) => {
    this.setState({
      layout: layouts,
    });
  };
  onDrop(layout, layoutItem, event) {
    debugger
    alert(`Dropped element props:\n${JSON.stringify(layout, ['x', 'y', 'w', 'h'], 2)}`);
    var len = this.state.layout.length + 1
    var dumyobj = {}
    var dumydata =  {
        id:"",
        componentname: "Textbox",
        height : "100",
        width : "100",
        type : "text",
        title : "User Name",
        placeholder : "Please Enter the Username",
        backgroundColor : "#ededed",
        value:"",
        labelstyle : {fontSize: "14px"},
    }
    dumydata["id"]=len
    var datacopy = [...this.state.data]
    console.log("datacopy",datacopy)
    datacopy.push(dumydata)
    dumyobj["i"] = len.toString()
    dumyobj["x"] = layout["x"]
    dumyobj["y"] = layout["y"]
    dumyobj["w"] = layout["w"]
    dumyobj["h"] = layout["h"]
    dumyobj["minH"] = 0
    dumyobj["maxH"] = 2
    var dumyarray = this.state.layout
    dumyarray.push(dumyobj)
    this.setState({
      layout: dumyarray,
      data : datacopy
    })
  };

  deletecomp = (filtereddata) => {
    this.setState({
      data: filtereddata
    })
  }
  editcomp = (editid, bol) => {

    this.setState({
      editid: editid,
      sidebar: bol
    })
    map(this.state.data, (details, index) => {
      if (editid == details["id"]) {
        this.setState({
          editdetails: details
        })
      }
    })
  }
  minimizeslider = () => {
    this.setState({
      sidebar: false
    })
  }
  savedata = (editeddetails) => {
    this.setState({
      sidebar: false
    })
    {
      map(this.state.data, (details, index) => {
        if (editeddetails["id"] == details["id"]) {
          details = editeddetails
        }
      })
    }
  }

  render() {
    console.log("this.state",this.state.layout)
    return (<div >
      <div className="Toolboxsidemenu" style={{ float: "left" }}>
        <div style={{ padding: "20px", display: "flex", fontSize: "17px", fontWeight: "700" }}>UI Tool Box</div>
        <div className="Dragcontainer">
          <div draggable="true" unselectable="on" className="Dragbox" onDragStart={e => e.dataTransfer.setData("text/plain", "")}>TextBox</div>
        </div>
        <div className="Dragcontainer">
          <div draggable="true" unselectable="on" className="Dragbox" onDragStart={e => e.dataTransfer.setData("text/plain", "")}>Button</div>
        </div>
        <div className="Dragcontainer">
          <div draggable="true" unselectable="on" className="Dragbox" onDragStart={e => e.dataTransfer.setData("text/plain", "")}>LongText</div>
        </div>
      </div>

      <div style={{ padding: "70px 0px", float: "left" }}>
        <ResponsiveReactGridLayout
          {...this.props}
          rowHeight={100}
          cols={6}
          onResize={this.onResize}
          width={100}
          layouts={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          draggableHandle=".MyDragHandleClassName"
          draggableCancel=".MyDragCancel"
          isDraggable={true}
          isResizable={true}
          onDrop={this.onDrop}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          isDroppable={true}
        >

          {this.Renderchat()}
        </ResponsiveReactGridLayout>
      </div>


      {this.state.sidebar &&
        <EditParticularComp
          editdetails={this.state.editdetails}
          editid={this.state.editid}
          minimizeslider={this.minimizeslider}
          savedata={this.savedata}
        />
      }
    </div>
    );
  }
}


export default Dragandropgrid;
