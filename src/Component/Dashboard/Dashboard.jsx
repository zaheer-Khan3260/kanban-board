import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import userImage from './personImage.jpeg'
import { AiOutlinePlus } from "react-icons/ai";
import fireLogo from './codeigniter-logo.png'
import more from './more.png'
import './Dashboard.css'

export default function Dashboard() {
    
    const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

    return (
           selectedData && (
            <div className="dashboardCont" style={{justifyContent:"space-evenly"}}>
                {selectedData.map((element, index) => {
                    return (
                        <>
                        <div className="dashboardCardCont" style={{position: "relative", zIndex:"2"}}>
                            <div className="cardHeadingcont" style={{display: "flex", justifyContent: "space-between"}}>
                                <div className="leftView">
                                    {!user ? (
                                       <>
                                       <div className="imageContainer" style={{width: "15px", height: "15px", display: "inline-block"}}>
                                        <img
                                         style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "50%",
                                        
                                          }}
                                        src={fireLogo}
                                         alt="logoImage"
                                          />
                                       </div>
                                       </>
                                    ) : (
                                        <>
                                        <div className="imageContainer" style={{width: "25px", height: "25px", display: "inline-block"}}>
                                            <img
                                             style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "50%",
                                                position: "absolute",
                                                
                                              }}
                                            src={userImage}
                                            alt="userImage" />
                                        </div>
                                        
                                        </>
                                    )}
                                    <span>
                                        {" "}
                                        {element[index]?.title} {element[index]?.value?.length}
                                    </span>
                                </div>
                                <div className="rightView">
                                <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                                               
                                </div>
                            </div>
                            <div className="cardList">
                                    {element[index]?.value?.map((element, index) => {
                                        return (
                                            <Card Id={element.id} title={element.title} tag={element.tag} />
                                        )
                                    })}
                            </div>
                        </div>
                        </>
                    )})
                }
            </div>
           )
    )
};