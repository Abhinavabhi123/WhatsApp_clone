import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";
import Dashboard from "./Components/Dashboard";
import { ContactProvider } from "./Contexts/ContactProvider";
import { ConversationsProvider } from "./Contexts/ConversationProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashBoard = (
    <ContactProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactProvider>
  );

  return id ? dashBoard : <Login onIdSubmit={setId} />;
}

export default App;
