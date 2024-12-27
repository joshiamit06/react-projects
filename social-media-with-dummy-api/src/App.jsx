import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import SocialMediaContextProvider from "./store/social-media-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const changeSelectedTab = (e) => {
    const tab = e.target.innerText;
    setSelectedTab(tab);
  };

  return (
    <SocialMediaContextProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          changeSelectedTab={changeSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <PostList/> : <CreatePost/>}
        </div>
      </div>
    </SocialMediaContextProvider>
  );
}

export default App;
