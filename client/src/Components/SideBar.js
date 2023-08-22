import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import ConversationModal from "./ConversationModal";
import ContactModal from "./ContactModal";

const CONVERSATION = "conversations";
const CONTACT = "contact";

function SideBar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION);
  const conversationsOpen = activeKey === CONVERSATION;
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column b">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <ConversationModal closeModal={closeModal} />
        ) : (
          <ContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default SideBar;
