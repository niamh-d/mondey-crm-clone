import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "Completed":
        color = "rgb(186,255,201)";
        break;
      case "In Progress":
        color = "rgb(255,223,186)";
        break;
      case "Blocked":
        color = "rgb(255,179,186)";
        break;
      default:
        color = "rgb(186,255,255)";
    }
    return color;
  };

  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status), maxWidth: "85px" }}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
