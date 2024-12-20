import React from "react";
import { Link } from "react-router-dom";
import '../Style/Sidebar.css'
import glug from'../Assest/glug.png'

const Sidebar=() =>{
  return (
    <div style={{ width:"25%", backgroundColor: "#202c33", color: "white", paddingTop: "20px" }}>
      <div className="header">
      <img className="glug-icon" src={glug}/>
      <span className="header-text">
        VGLUG Foundation
      </span>
      </div>
      <Link to="/" className="link">
        <div>Personal Details</div>
      </Link>
      <Link to="/education_details" className="link">
        <div>Education Details</div>
      </Link>
      <Link to="/family_details" className="link">
        <div>Family Details</div>
      </Link>
      <Link to="/others" className="link">
        <div>Others</div>
      </Link>
      {/* <Link to="/" style={styles.link}>
        <div>Spam</div>
      </Link>
      <Link to="/" style={styles.link}>
        <div>Trash</div>
      </Link> */}
    </div>
  );
}

export default Sidebar;
