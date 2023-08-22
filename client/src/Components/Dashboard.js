import React from "react";
import SideBar from "./SideBar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../Contexts/ConversationProvider";

function Dashboard({ id }) {
  const {selectedConversation}=useConversations()
  return (
    <div className="d-flex" style={{ height: "100vh",width:"99vw"}}>
      <SideBar id={id} />
      {selectedConversation && <OpenConversation/>}
    </div>
  );
}

export default Dashboard;
