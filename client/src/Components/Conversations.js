import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../Contexts/ConversationProvider";

function Conversations() {
  const { conversations } = useConversations();
  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, i) => (
        <ListGroup.Item kay={i}>
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversations;
