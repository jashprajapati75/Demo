import React, { useMemo, useState } from "react";
// import { withTranslation } from "react-i18next";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import AddCallerIdModal from "./PhoneNumberModal";
import { FaRegCopy } from "react-icons/fa";
import PhoneNumberModal from "./PhoneNumberModal";

function Deployment({ t }) {
  const navItems = useMemo(
    () => [
      {
        name: "GoHighLevel",
        content: <>GoHighLevel</>,
      },
      {
        name: "Zapier",
        content: <>Zapier</>,
      },
      {
        name: "Rest API",
        content: <>Rest API</>,
      },
    ],
    []
  );

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [activeTab, setActiveTab] = useState(navItems[0].name);

  const activeContent = navItems.find(
    (item) => item.name === activeTab
  )?.content;
  const [phoneModal, setPhoneModal] = useState(false);
  // const [buyModal, setBuyModal] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [callerIds, setCallerIds] = useState([]);
  // const [callerIdModal, setCallerIdModal] = useState(false);

  const togglePhoneModal = () => setPhoneModal(!phoneModal);

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="page-content">
      <div className="d-flex flex-column gap-3">
        <div>
          <h4 className="text-dark">{"Deployment"}</h4>
        </div>
        <div className="bg-white d-flex flex-column p-4 border rounded-3 ">
          <div className="d-flex justify-content-between gap-4">
            <FormGroup className="w-25">
              <Label for="phoneNumber" className="text-muted">
                {"Phone number"}
              </Label>
              <div className="input-group ">
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="select a phone number"
                  type="number"
                  className=""
                />
                <Button
                  className="btn bg-white text-muted border"
                  type="button"
                  onClick={togglePhoneModal}
                >
                  Change
                </Button>
                <PhoneNumberModal
                  toggle={togglePhoneModal}
                  modal={phoneModal}
                />
              </div>
            </FormGroup>
            <div className="d-flex w-75 gap-2  ">
              <FormGroup className="w-100">
                <Label for="phoneNumber" className="text-muted ">
                  {"Webhook"}
                </Label>
                <Input
                  id="Webhook"
                  name="Webhook"
                  placeholder="https://www.google.com/"
                  type="text"
                />
              </FormGroup>
              <div className="d-flex flex-column align-items-center justify-content-center mt-3 ">
                <Button className="bg-white border text-dark" disabled>
                  {"Intialize"}
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex text-muted gap-2" style={{ fontSize: "12px" }}>
            <div className="d-flex">
              <span>Assistant ID:17...46200</span>
              <Button className="bg-white border-white text-muted d-flex align-items-center p-0 ps-1" onClick={()=>navigator.clipboard.writeText('Assistant ID')}>
                <FaRegCopy size={12} />
              </Button>
            </div>
            <div className="border-start"></div>
            <div className="d-flex">
              <span>Api Key:17...46200</span>
              <Button className="bg-white border-white text-muted d-flex align-items-center p-0 ps-1 " onClick={()=>navigator.clipboard.writeText('Api key')}>
                <FaRegCopy size={12} />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <Nav tabs className="border-0 gap-2 mb-4">
              {navItems.map((item) => (
                <NavItem key={item.name}>
                  <NavLink
                    className={`cursor-pointer border px-2 py-1 rounded-2 ${
                      activeTab === item.name
                        ? "active bg-primary bg-opacity-10 font-medium text-primary"
                        : "text-dark"
                    }`}
                    onClick={() => toggleTab(item.name)}
                  >
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            <div className="nav-content border-t ">{activeContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deployment;
