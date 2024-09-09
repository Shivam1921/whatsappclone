import { useState } from "react";
import "./App.css";
import LeftPane from "./components/left_section/LeftPane";
import RightPane from "./components/right_section/RightPane";
import type { UserIndex } from "./types/commonTypes";
import DefaultPage from "./components/right_section/default/DefaultPage";


function App() {
  const [userId, setUserId] = useState<UserIndex|null>(null);
  const [currentMessage,setCurrentMessage] = useState("");
  const [makeRerender,setMakeRerender] = useState(false);
  return (
    <div className="container">
      <LeftPane userId={userId} setUserId={setUserId}/>
      {typeof userId === "number"?
      <RightPane userId={userId} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} makeRerender={makeRerender} setMakeRerender={setMakeRerender}/>
   :<DefaultPage/>}
      </div>
  );
}

export default App;
