import React from "react";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";

function Center() {
  return (
    <div className="Center">
      <h3 style={{ marginBottom: "10px" }}>Welcome Back, Andrew!</h3>
      <h6 style={{ color: "grey" }}>Have a look at quick progress Bar</h6>
      <div className="FlexRow">
        <div className="ProgressCard1">
          <div className="FlexRow Label projectlabel">
            <WifiTetheringIcon />
            Live Projects
          </div>
          <div className="Label ViewAll">View all</div>
          <div className="">56</div>
        </div>
      </div>
    </div>
  );
}

export default Center;
