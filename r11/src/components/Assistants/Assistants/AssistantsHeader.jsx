import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import {
  Button,
  Container,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import CreateAssistantModal from "./CreateAssistantModal";

function AssistantsHeader(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const { pathname } = useLocation();
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      // style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle1}
    >
      &times;
    </button>
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container fluid className="py-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="d-flex flex-wrap gap-3">
          <div>
            <NavLink
            end
              className={({ isActive }) =>
                isActive
                  ? "border border-primary rounded-pill nav-link fs-5 px-3 py-1 bg-primary bg-opacity-10 text-primary"
                  : "px-3 py-1 bg-white bg-opacity-10 border rounded-pill nav-link fs-5"
              }
              to="/assistants"
            >
              Assistants
            </NavLink>
          </div>
          <div className="  ">
            <NavLink
            end
              className={({ isActive }) =>
                isActive
                  ? "border border-primary rounded-pill nav-link fs-5 px-3 py-1 bg-primary bg-opacity-10 text-primary"
                  : "px-3 py-1 bg-white bg-opacity-10 border border  rounded-pill nav-link fs-5"
              }
              to="/assistants/teams"
            >
              Teams
            </NavLink>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 align-items-center">
          {/* {pathname === "/assistants" ? ( */}
            <>
              <div className="position-relative ">
                <Input
                  type="text"
                  placeholder="Search"
                  name="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className=" ps-5"
                  style={{
                    width: "15rem",
                  }}
                />
                <i
                  className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                  style={{ pointerEvents: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </i>
              </div>

             {pathname === "/assistants" &&( <Button className="bg-white border rounded-3 p-1 ps-2 pe-2">
                <i className="ri-filter-line text-muted fs-4"></i>
              </Button>)}
              {/* <div className="border rounded-4"> */}
                <Button className="bg-dark border rounded-3" onClick={toggle1}>
                  <div className="d-flex gap-2">
                    <i class="ri-add-line text-white"></i>
                    <span className="text-white">Create Workspace</span>
                  </div>
                </Button>
                  
                <CreateAssistantModal isOpen={modal1} toggle={toggle1} t={props.t} />

              {/* </div> */}
            </>
        </div>
      </div>
    </Container>
  );
}

AssistantsHeader.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(AssistantsHeader);
