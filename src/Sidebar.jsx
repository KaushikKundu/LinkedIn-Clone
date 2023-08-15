import React from 'react';
import { Avatar } from '@mui/material';
import "./Sidebar.css";
import background from "../src/assets/background.jpg";
//import profileImage from "../src/assets/profile.png"

const Sidebar = (profileImage) => {
    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return ( 
        <div className="sidebar">
            <div className="sidebar-top">
                <img src={background} alt="" />
                <Avatar className="sidebar-avatar" src="../src/assets/profile.png"/>
                <h2>Kaushik Kundu</h2>
                <h4>kaushik@gmail.com</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar-statNumber">
                        3,44
                    </p>
                </div>
                 <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-statNumber">2,334</p>
                 </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("ReactJS")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("Developer")}

            </div>
        </div>
     )
}
 
export default Sidebar;