import SideBar from "./SideBar";
import Center from "./Center";
import Messages from "./Messages";
function Content() {
  return (
    <div className="App-content">
      <SideBar />
      <Center />
      <Messages />
    </div>
  );
}

export default Content;
