import React from "react";

const HeaderComponent = ({ location, date }) => (
  <div className="header">
    <h3 className="location">{location}</h3>
    <p className="date">{date}</p>
  </div>
);

export default HeaderComponent;
