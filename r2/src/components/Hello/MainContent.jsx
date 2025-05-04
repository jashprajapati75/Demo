import { t } from "i18next";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Nav,
  NavItem,
  Row,
  Spinner,
} from "reactstrap";
import SubModal from "./SubModal";
// import SubModal from "./SubModal";

function MainContent({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  filteredTemplates,
  industries,
  isLoading = false,
  error = null,
}) {
  const [playingTemplateId, setPlayingTemplateId] = useState(null);
  const [hoveredTemplateId, setHoveredTemplateId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [subModal, setSubModal] = useState(false);

  const SubModalToggle = () => setSubModal(!subModal);

  const handleCardClick = (template) => {
    setSelectedTemplate(template);
    setSubModal(true);
  };

  const togglePlay = (templateId) => {
    if (playingTemplateId === templateId) {
      setPlayingTemplateId(null);
    } else {
      setPlayingTemplateId(templateId);
    }
  };

  if (isLoading) {
    return (
      <div className="template-main-content d-flex flex-column justify-content-center align-items-center w-100 ms-4 me-2 mt-3 py-5">
        <Spinner color="primary" />
        <p className="mt-3">{"Loading templates..."}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="template-main-content d-flex flex-column justify-content-center align-items-center w-100 ms-4 me-2 mt-3 py-5">
        <div className="text-danger mb-3">
          <i className="ri-error-warning-line fs-1"></i>
        </div>
        <h4 className="text-danger">{"Error loading templates"}</h4>
        <p className="text-muted">
          {error.message || "Please try again later"}
        </p>
      </div>
    );
  }

  return (
    <div className="template-main-content d-flex flex-column w-100 ms-4 me-2 mt-3">
      <Row>
        <Col>
          <Nav
            tabs
            className="border rounded-3 p-1 gap-2 bg-light"
            style={{ width: "fit-content" }}
          >
            <NavItem className="">
              <Button
                className={`d-flex align-items-center gap-2 p-1 ${
                  activeTab === "inbound"
                    ? "active border rounded-3 bg-white"
                    : "text-muted"
                }`}
                onClick={() => setActiveTab("inbound")}
                style={{ cursor: "pointer" }}
              >
                <i className="bx bx-phone-incoming fs-4"></i>
                {"Inbound"}
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className={`d-flex align-items-center gap-2 p-1 ${
                  activeTab === "outbound"
                    ? "active border rounded-3 bg-white"
                    : "text-muted"
                }`}
                onClick={() => setActiveTab("outbound")}
                style={{ cursor: "pointer" }}
              >
                <i className="bx bx-phone-outgoing fs-4"></i>
                {"Outbound"}
              </Button>
            </NavItem>
          </Nav>
        </Col>
        <Col xs={12} md={6}>
          <div className="position-relative d-flex justify-content-start justify-content-md-end">
            <div className="w-100 me-3" style={{ maxWidth: "15rem" }}>
              <Input
                type="text"
                placeholder="Search..."
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-5"
              />
              <i
                className="bi bi-search position-absolute translate-middle-y ms-3 text-muted"
                style={{ cursor: "pointer", bottom: "1px" }}
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
            </div>
          </div>
        </Col>
      </Row>
      <div className="me-3 mt-3">
        <Row>
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <Col xs={12} sm={6} md={6} lg={3} key={template.id}>
                <Card
                  className="h-100 border shadow-none rounded-4 template-card"
                  onMouseEnter={() => {
                    if (template.type === "outbound") {
                      setHoveredTemplateId(template.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (
                      template.type === "outbound" &&
                      playingTemplateId !== template.id
                    ) {
                      setHoveredTemplateId(null);
                    }
                  }}
                  // onClick={SubModalToggle}
                  onClick={() => handleCardClick(template)}
                >
                  <CardBody>
                    <div className="mb-2">
                      <div className="d-flex gap-4">
                        {template.type === "outbound" &&
                          (hoveredTemplateId === template.id ||
                          playingTemplateId === template.id ? (
                            <div
                              className="d-flex justify-content-center align-items-center border rounded-circle voice-btn"
                              onClick={() => togglePlay(template.id)}
                            >
                              <i
                                className={`fs-5 ${
                                  playingTemplateId !== template.id
                                    ? "ri-volume-up-line"
                                    : "ri-stop-fill"
                                }`}
                              ></i>
                            </div>
                          ) : (
                            <div className="d-flex justify-content-center align-items-center voice-btn"></div>
                          ))}
                        {template.type !== "outbound" && (
                          <div className="d-flex justify-content-center align-items-center voice-btn"></div>
                        )}

                        <div>
                          <h5 className="mb-2 text-center text-dark">
                            {template.title}
                          </h5>
                          <Badge
                            color="white text-black border"
                            className="me-1"
                          >
                            <i
                              className={`${
                                industries.find(
                                  (industry) =>
                                    industry.name === template.industry
                                ).icon
                              } text-muted fs-6`}
                            ></i>
                            <span className="ms-1 fs-6 text-muted fw-lighter">
                              {template.industry}
                            </span>
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-2 d-flex justify-content-center my-2"></div>
                      <div className="mt-3 mb-2 d-flex">
                        {template.tags.map((tag, idx) => (
                          <div
                            color="white text-black"
                            className="me-1"
                            key={idx}
                          >
                            #{tag}
                          </div>
                        ))}
                      </div>
                      <p className="text-muted mb-0">
                        {template.description.slice(0, 100) + "..."}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <i className="ri-download-2-line text-primary download-icon"></i>
                        <p className="text-muted mb-0 download-icon fw-medium">
                          {template.downloads}
                        </p>
                      </div>
                      <div color="light text-black">
                        {template.price === "free" ? "Free" : "Paid"}
                      </div>
                    </div>
                  </CardBody>
                  <div>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <p className="text-dark">
                {`We couldn't find any ${activeTab} templates`}
              </p>
              <p className="text-muted">
                Please check your filters or request a new one at
                contact@botphonic.ai
              </p>
            </Col>
          )}
        </Row>
          <SubModal toggle={SubModalToggle} modal={subModal} template={selectedTemplate}/>
      </div>
    </div>
  );
}

export default MainContent;
