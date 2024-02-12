import React from 'react'
import{tabLabels} from './constant'
import { Link} from 'react-router-dom'
import "./Tab.css";

function Tab(props) {
    const [CANCEL_AT_ANY_TIME,PICK_YOUR_PRICE,WATCH_ANYWHERE]=tabLabels;
    const renderTabTitle=(tabTitle, isActive,icon,id)=>(
        <div id={id} className={`tab-items ${isActive && "tab-boder"}`}>
            <i className={icon}></i>
        </div>
    )
  return (
    <div>
      
    </div>
  )
}

export default Tab
