import React from "react";

import blankAvatar from "../images/blank-avatar.jpg";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <p style={{ marginRight: "10px" }}>{ticket.owner}</p>
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"photo of " + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
