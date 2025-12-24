import React from "react";
import "./elite-table.css";

const data = [
  { label: "Experience", value: "3+ Years" },
  { label: "Frontend", value: "React, UI/UX" },
  { label: "Backend", value: "Node, Django, ASP.NET" },
  { label: "Database", value: "MongoDB, MySQL" },
  { label: "Architecture", value: "REST APIs, Clean Code" }
];

const EliteTable = () => {
  return (
    <div className="elite-table">
      {data.map((row, index) => (
        <div className="elite-row" key={index}>
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  );
};

export default EliteTable;