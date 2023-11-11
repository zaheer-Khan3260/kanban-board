import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux"
import {selectData} from "../../Component/FetchData/FetchData.js"
import list from './list.png'
import down from './down.png'


const getGroup = () => {
   if(localStorage.getItem("group")){
      return localStorage.getItem("group")
   }else{
      return "status";
   }
}

const getOrder = () => {
   if(localStorage.getItem("order")){
      return localStorage.getItem("order");
   }else{
      return "priority";
   }
}


export default function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [groupValue, setGroupeValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());
  const dispatch = useDispatch();

  const {allTickets, allUser} = useSelector(state => state.DataReducer);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
}

const handleGroupValue = (e, valueBoolen) => {
   if(valueBoolen){
      setGroupeValue(e.target.value);
      localStorage.setItem("group", e.target.value);
   }else{
      setOrderValue(e.target.value);
      localStorage.setItem("order", e.target.value);
   }
}

  useEffect(() => {
      if(groupValue === 'user'){
         dispatch(selectData(groupValue, {
            allTickets, allUser
         }, orderValue))
      }else{
         dispatch(selectData(groupValue, allTickets, orderValue));
      }
  }, [allTickets, dispatch, groupValue, allUser, orderValue])
    
    return (
        <div className="navbar-cont"> 
        
           <div className="nav-btn" onClick={toggleDisplay}>
            <img src={list} alt="" className='image' />
            Display
            <img src={down} alt=""className='image2' />
           </div>

           <div id='navOpt-cont' className="navOpt-cont"
           style={ {display: isDisplayed ? 'block' : 'none'}}
           >
             <p style={{margin:"10px 0px"}}>Grouping
             <select className="option" value={groupValue} onChange={(e) => handleGroupValue(e, true)}>
                <option value="status">
                 Status
                </option>
                <option value="user">
                 User
                </option>
                <option value="priority">
                 Priority
                </option>
             </select>
             </p>

             <p>Ordering
             <select className="option" value={orderValue} onChange={(e) => handleGroupValue(e, false)}>
                <option value="title">
                 Title
                </option>
                <option value="priority">
                Priority                 
                </option>
             </select>
             </p>
           </div>
        </div>
    )
}