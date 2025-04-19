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
      <h3 className="m-0">
        {selectedItem ? selectedItem[0]?.toUpperCase() : "W"}
      </h3>
    </div>
    <span className="fw-bold">{selectedItem || "Workspace"}</span>
  </div>

  <span className="dropdown-caret">&#9662;</span>
</DropdownToggle>
        <DropdownMenu
          className="position-relative"
          style={{ minWidth: "20rem" }}
        >
          <DropdownItem header>
            <Input
              type="text"
              placeholder="search here"
              name="search"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </DropdownItem>
          {workspaceArr.length > 0
            ? workspaceArr.map((Workspace) => (
                <DropdownItem onClick={() => handleSelected(Workspace)}   className={
                    selectedItem === Workspace.name
                      ? "bg-primary text-black bg-opacity-25 border border-primary p-3 rounded"
                      : "p-3"
                  }>
                  <div className="d-flex">
                    <div className="bg-primary bg-opacity-25  ps-2 pe-2 p-1 border border-primary rounded text-primary">
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
                  Create New Workspace
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
