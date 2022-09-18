import React, { useState } from "react";
import Modal from "./Modal";

export default function Portal() {
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "blue",
    padding: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          This is portal modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}
