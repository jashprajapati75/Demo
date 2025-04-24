// CreateAssistantModal.js
import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CreateAssistantModal({ isOpen, toggle, t }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} style={{ minWidth: "50rem" }}>
      <ModalHeader toggle={toggle}>{t("Create New Assistant")}</ModalHeader>
      <ModalBody>
        <div className="d-flex justify-content-center gap-4">
          <div className="border border-dashed rounded-4 w-50 h-50 d-flex flex-column justify-content-center align-items-center">
            <div className="border rounded-circle p-1 ps-3 pe-3 mt-3 bg-primary bg-opacity-10">
              <i className="ri-add-line text-muted fs-1"></i>
            </div>
            <div className="mt-4 d-flex flex-column align-items-center">
              <p>{t("Start from scratch")}</p>
              <p>{t("Build your Ai Assistant from the ground up")}</p>
            </div>
          </div>
          <div className="border rounded-4 w-50 d-flex justify-content-center align-items-center" style={{ minWidth: "12rem" }}>
            2
          </div>
          <div className="border rounded-4 w-50 d-flex justify-content-center align-items-center" style={{ minWidth: "12rem" }}>
            3
          </div>
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
}

CreateAssistantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CreateAssistantModal;
