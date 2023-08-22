import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../Contexts/ConversationProvider";

export default function OpenConversation() {
  const [text, setText] = useState();
  const {sendMessages,selectedConversation}=useConversations()
  function handleSubmit(e){
    e.preventDefault()
    sendMessages(selectedConversation.recipients.map((r=>r.id)),text)
    setText("")
  }
  return ( 
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup className="m-2">
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            {/* <InputGroup.Append> */}
              <Button type="submit">Send</Button>
            {/* </InputGroup.Append> */}
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
