import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Input } from "reactstrap";

function BuyNumberModal({ modal, toggle }) {
      const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Phone Numbers</ModalHeader>
        <ModalBody className="p-0">
        <div className="d-flex template-modal-body">
            <div className="bg-light border-end px-3" style={{width:'10rem'}}>
                hello
            </div>
          <div className="px-2" >
            <div className="position-relative w-100 me-3">
              <i
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </i>
              <Input
                type="text"
                placeholder="Search..."
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-5"
              />
            </div>
          </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default BuyNumberModal;
