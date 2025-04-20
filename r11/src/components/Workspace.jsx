import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Workspace() {
  const [workspaceArr, setWorkspaceArr] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [workspaceDetail, setWorkspaceDetail] = useState({
    name: "",
    website: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleChange = (e) => {
    setWorkspaceDetail((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const toggle1 = () => setModal(!modal);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleClick = () => {
    setWorkspaceArr((pData) => [...pData, workspaceDetail]);
    toggle1();
    setWorkspaceDetail({
      name: "",
      website: "",
    });
  };
  const handleSelected = (w) => {
    setSelectedItem(w.name);
  };
  const filterWorkspace = workspaceArr.filter((ws)=>(ws.name.toLowerCase().includes(searchQuery.toLowerCase())))
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          caret={false}
          size="lg"
          className="bg-white text-dark w-100 d-flex align-items-center justify-content-between border-primary border-2"
        >
          <div className="d-flex align-items-center gap-2 ">
            <div className="bg-primary bg-opacity-25 ps-2 pe-2 p-1 border border-primary rounded text-primary">
              <h3 className="" style={{ minWidth: "2rem", minHeight: "1rem" }}>
                {selectedItem ? selectedItem[0]?.toUpperCase() : "W"}
              </h3>
            </div>
            <span className="fw-bold">{selectedItem || "Workspace"}</span>
          </div>

          <span className="dropdown-caret">
            <i class="bi bi-arrow-down-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </i>
          </span>
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute"
          style={{ minWidth: "30rem", marginTop: "5rem" }}
        >
          <DropdownItem header>
            <div className="position-relative">
              <Input
                type="text"
                placeholder="Search"
                name="search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="ps-5"
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
          </DropdownItem>
          {filterWorkspace.length > 0
            ? filterWorkspace.map((Workspace) => (
                <DropdownItem
                  onClick={() => handleSelected(Workspace)}
                  className={
                    selectedItem === Workspace.name
                      ? "bg-primary text-black bg-opacity-25 border border-primary p-3 rounded"
                      : "p-3"
                  }
                >
                  <div className="d-flex">
                    <div
                      className="bg-primary bg-opacity-25 border border-primary rounded text-primary d-flex justify-content-center align-items-center"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <h3 className="">{Workspace.name[0].toUpperCase()}</h3>
                    </div>
                    &nbsp;&nbsp;
                    <div>{Workspace.name}</div>
                    {selectedItem === Workspace.name && (
                      <span className="ms-5">&#10003;</span>
                    )}
                  </div>
                </DropdownItem>
              ))
            : "No Workspaces"}
          <DropdownItem>
            <>
              <div>
                <Button
                  color="white"
                  onClick={toggle1}
                  className="border w-100"
                >
                  <i class="bi bi-plus-square-fill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                    </svg>
                  </i>{" "}
                  &nbsp;&nbsp; Create New Workspace
                </Button>
                <Modal isOpen={modal} fade={false} toggle={toggle1}>
                  <ModalHeader toggle={toggle1}>New Workspace</ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder=""
                          type="text"
                          value={workspaceDetail.name}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="website">{"Workspace (optional)"}</Label>
                        <Input
                          id="website"
                          name="website"
                          placeholder=""
                          type="text"
                          value={workspaceDetail.website}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Form>
                    <div className="bg-light border border-primary rounded d-flex justify-content-center align-items-center ">
                      <div className="bg-primary bg-opacity-25 m-5 p-3 ps-4 pe-4 border border-primary rounded text-primary">
                        <h3 className="">
                          {workspaceDetail.name.length !== 0
                            ? workspaceDetail.name[0]?.toUpperCase()
                            : "w"}
                        </h3>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="white" onClick={toggle1}>
                      cancel
                    </Button>{" "}
                    <Button color="dark" onClick={handleClick}>
                      Create workspace
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Workspace;
