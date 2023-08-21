import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../Contexts/ContactProvider";

function Contacts() {
  const { contacts } = useContacts();
  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item kay={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Contacts;
