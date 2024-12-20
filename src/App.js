import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Inbox from "./components/Inbox";
// import Compose from "./components/Compose";
import PersonalDetails from "./components/PersonalDetails";
import FamilyDetails from "./components/FamilyDetails";
import Others from "./components/Others";
import EducationalDetails from "./components/EducationalDetails";

const  App =()=>{
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, backgroundColor: "#f1f3f4" ,height:"100vh"}}>
          <Routes>
            <Route path="/" element={<PersonalDetails />} />
            <Route path="/education_details" element={<EducationalDetails />} />
            <Route path="/family_details" element={<FamilyDetails />} />
            <Route path="/others" element={<Others />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
