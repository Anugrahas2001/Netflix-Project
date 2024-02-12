import React,{useState} from "react";
import Tab from "./Tab";
import { tabLabels } from "./constant";

const Tabcomponent=()=>{
    const [activeTab,setActivetab]=useState(tabLabels.CANCEL_AT_ANY_TIME);
    const onClickTab=(tab)=>{
        setActivetab(tab);
    }
    return (
        <div>
            <Tab activeTabNzme={activeTab} onClickTab={onClickTab}/>
        </div>
    )
}