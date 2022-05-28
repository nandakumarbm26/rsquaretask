import React from "react";
import MenuItem from "./MenuItem";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SendIcon from "@mui/icons-material/Send";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallIcon from "@mui/icons-material/Call";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
function SideBar() {
  return (
    <div className="App-sidebar">
      <div className="App-sidebar">
        <MenuItem icon={<DashboardIcon />} menu="Dashboard" />
        <MenuItem icon={<CalendarMonthIcon />} menu="Calender" />
        <MenuItem icon={<ArticleIcon />} menu="Project" />
        <MenuItem icon={<SendIcon />} menu="Messages" />
        <MenuItem icon={<NotificationsActiveIcon />} menu="Notifications" />
        <MenuItem icon={<CallIcon />} menu="Contacts" />
      </div>
      <h6>Promotions</h6>
      <div className="App-sidebar">
        <MenuItem icon={<LocalOfferIcon />} menu="Dashboard" />
      </div>
    </div>
  );
}

export default SideBar;
