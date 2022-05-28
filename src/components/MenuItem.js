import React from "react";
function MenuItem({ icon, menu }) {
  return (
    <div className="MenuItem">
      {icon}
      <h5>{menu}</h5>
    </div>
  );
}

export default MenuItem;
