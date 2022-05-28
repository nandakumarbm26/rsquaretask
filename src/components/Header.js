function Header() {
  return (
    <div className="Header">
      <div className="App-logo">
        <img src="images\logo.png" width="160" height="50" />
      </div>
      <div className="App-search">
        <input
          type="text"
          placeholder="Search for projects"
          className="App-search-bar"
        ></input>
      </div>
      <div className="App-user">
        <img src="images\dp.jpg" width="50" height="50" className="dp" />
        <div>
          <h4>Oliver Smith</h4>
          <h6>Vendeor</h6>
        </div>
        <h3 style={{ textAlign: "center" }}>></h3>
      </div>
    </div>
  );
}

export default Header;
