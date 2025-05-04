import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Navbar1 from "./AssistantsHeader";
// const [filteredTemplates, setFilteredTemplates] = useState(allTemplates);
import {
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Input as RadioInput,
  Label,
} from "reactstrap";
import {
  Download,
  Shield,
  Search,
  Phone,
  Upload,
  Home,
  Heart,
  Sun,
  Users,
  Car,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

function Teams() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const [activeTab, setActiveTab] = useState("inbound");
  const [industryExpanded, setIndustryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [installsExpanded, setInstallsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter states
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [installsFilter, setInstallsFilter] = useState(null);

  // Track if any filter is active
  const [isFilterActive, setIsFilterActive] = useState(false);

  const allTemplates = [
    {
      id: 1,
      title: "Utility Scout",
      industry: "Solar",
      tags: ["Lead Qualification", "Real-Time Booking"],
      description:
        "Meet Timmy, a professional Voice AI Utility Scout for your solar company...",
      downloads: 356,
      price: "free",
      type: "inbound",
    },
    {
      id: 2,
      title: "Mortgage Lead Qualifier",
      industry: "Mortgage",
      tags: ["Real-Time Booking", "Lead Qualification"],
      description:
        "Meet Emma, an AI representative for your mortgage company. Her primary...",
      downloads: 394,
      price: "free",
      type: "inbound",
    },
    {
      id: 3,
      title: "Interview Scheduler",
      industry: "Recruitment",
      tags: ["Real-Time Booking", "Pre-screening"],
      description:
        "Say hello to Beatrice, a virtual assistant for managing interview timelines...",
      downloads: 273,
      price: "free",
      type: "outbound",
    },
    {
      id: 4,
      title: "Service Reminder",
      industry: "Car Dealership",
      tags: ["Real-Time Booking", "Appt. Reminder"],
      description:
        "Meet Luna, the Voice AI Car Service Reminder Specialist for your car...",
      downloads: 187,
      price: "free",
      type: "inbound",
    },
    {
      id: 5,
      title: "Property Reconnector",
      industry: "Real Estate",
      tags: ["Real-Time Booking", "Lead Reactivation"],
      description:
        "Meet Alex, an AI representative for your Real Estate company. His primary...",
      downloads: 178,
      price: "paid",
      type: "outbound",
    },
    {
      id: 6,
      title: "Special Offers and Promo",
      industry: "Car Dealership",
      tags: ["Lead Qualification"],
      description:
        "Introducing Arthor, a virtual assistant for promotional campaigns. Arthor's...",
      downloads: 224,
      price: "free",
      type: "outbound",
    },
    {
      id: 7,
      title: "Talent Scout",
      industry: "Recruitment",
      tags: ["Lead Qualification", "Pre-screening"],
      description:
        "Meet Taylor, a professional Voice AI Talent Scout for your recruiting...",
      downloads: 138,
      price: "paid",
      type: "inbound",
    },
    {
      id: 8,
      title: "Policy Renewal and Upsell",
      industry: "Insurance",
      tags: ["Lead Reactivation"],
      description:
        "Meet Sandy, an AI representative for your Life Insurance company. Her...",
      downloads: 236,
      price: "free",
      type: "outbound",
    },
    {
      id: 9,
      title: "Utility Scout",
      industry: "Solar",
      tags: ["Lead Qualification", "Real-Time Booking"],
      description:
        "Meet Timmy, a professional Voice AI Utility Scout for your solar company...",
      downloads: 356,
      price: "free",
      type: "inbound",
    },
    {
      id: 10,
      title: "Mortgage Lead Qualifier",
      industry: "Mortgage",
      tags: ["Real-Time Booking", "Lead Qualification"],
      description:
        "Meet Emma, an AI representative for your mortgage company. Her primary...",
      downloads: 394,
      price: "free",
      type: "inbound",
    },
    {
      id: 11,
      title: "Interview Scheduler",
      industry: "Recruitment",
      tags: ["Real-Time Booking", "Pre-screening"],
      description:
        "Say hello to Beatrice, a virtual assistant for managing interview timelines...",
      downloads: 273,
      price: "free",
      type: "outbound",
    },
    {
      id: 12,
      title: "Service Reminder",
      industry: "Car Dealership",
      tags: ["Real-Time Booking", "Appt. Reminder"],
      description:
        "Meet Luna, the Voice AI Car Service Reminder Specialist for your car...",
      downloads: 187,
      price: "free",
      type: "inbound",
    },
    {
      id: 13,
      title: "Property Reconnector",
      industry: "Real Estate",
      tags: ["Real-Time Booking", "Lead Reactivation"],
      description:
        "Meet Alex, an AI representative for your Real Estate company. His primary...",
      downloads: 178,
      price: "paid",
      type: "outbound",
    },
    {
      id: 14,
      title: "Special Offers and Promo",
      industry: "Car Dealership",
      tags: ["Lead Qualification"],
      description:
        "Introducing Arthor, a virtual assistant for promotional campaigns. Arthor's...",
      downloads: 224,
      price: "free",
      type: "outbound",
    },
    {
      id: 15,
      title: "Talent Scout",
      industry: "Recruitment",
      tags: ["Lead Qualification", "Pre-screening"],
      description:
        "Meet Taylor, a professional Voice AI Talent Scout for your recruiting...",
      downloads: 138,
      price: "paid",
      type: "inbound",
    },
    {
      id: 16,
      title: "Policy Renewal and Upsell",
      industry: "Insurance",
      tags: ["Lead Reactivation"],
      description:
        "Meet Sandy, an AI representative for your Life Insurance company. Her...",
      downloads: 236,
      price: "free",
      type: "outbound",
    },
  ];

  const [filteredTemplates, setFilteredTemplates] = useState(allTemplates);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const industries = [
    { name: "Real Estate", icon: <Home size={16} /> },
    { name: "Healthcare", icon: <Heart size={16} /> },
    { name: "Solar", icon: <Sun size={16} /> },
    { name: "Recruitment", icon: <Users size={16} /> },
    { name: "Car Dealership", icon: <Car size={16} /> },
    { name: "Insurance", icon: <Shield size={16} /> },
    { name: "Mortgage", icon: <Home size={16} /> },
  ];

  useEffect(() => {
    // Apply filtering
    let results = allTemplates;

    // Filter by tab (inbound/outbound)
    results = results.filter((template) => template.type === activeTab);

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (template) =>
          template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by industry
    if (selectedIndustry) {
      results = results.filter(
        (template) => template.industry === selectedIndustry
      );
    }

    // Filter by price
    if (priceFilter) {
      results = results.filter((template) => template.price === priceFilter);
    }

    // Filter by installs
    if (installsFilter) {
      switch (installsFilter) {
        case "1000+":
          results = results.filter((template) => template.downloads >= 1000);
          break;
        case "500-1000":
          results = results.filter(
            (template) => template.downloads >= 500 && template.downloads < 1000
          );
          break;
        case "100-500":
          results = results.filter(
            (template) => template.downloads >= 100 && template.downloads < 500
          );
          break;
        case "0-100":
          results = results.filter((template) => template.downloads < 100);
          break;
        default:
          break;
      }
    }

    setFilteredTemplates(results);

    // Check if any filter is active
    setIsFilterActive(
      selectedIndustry !== null ||
        priceFilter !== null ||
        installsFilter !== null
    );
  }, [activeTab, searchTerm, selectedIndustry, priceFilter, installsFilter]);

  const getIndustryIcon = (industry) => {
    const found = industries.find((ind) => ind.name === industry);
    return found ? found.icon : <Home size={18} />;
  };

  const toggleIndustry = () => setIndustryExpanded(!industryExpanded);
  const togglePrice = () => setPriceExpanded(!priceExpanded);
  const toggleInstalls = () => setInstallsExpanded(!installsExpanded);

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(selectedIndustry === industry ? null : industry);
  };

  const handlePriceChange = (value) => {
    setPriceFilter(priceFilter === value ? null : value);
  };

  const handleInstallsChange = (value) => {
    setInstallsFilter(installsFilter === value ? null : value);
  };

  const resetFilters = () => {
    setSelectedIndustry(null);
    setPriceFilter(null);
    setInstallsFilter(null);
  };

  return (
    <React.Fragment>
      {/* <div className="page-content"> */}
      {/* <Navbar1/> */}
      <Container fluid>
        <div>teams</div>
        <Button color="primary" onClick={toggleModal}>
          Open Template Selection
        </Button>

        <Modal isOpen={modalOpen} toggle={toggleModal} fullscreen>
          <ModalHeader toggle={toggleModal} className="border-0 pb-0">
            Select Template
          </ModalHeader>
          <ModalBody className="pt-0">
            <div className="d-flex" style={{ height: "100vh" }}>
              {/* Sidebar */}
              <div
                className="sidebar border-end pe-3"
                style={{
                  // width: "350px",
                  // maxWidth:"350px",
                  position: "sticky",
                  top: "30px",
                  alignSelf: "flex-start",
                }}
              >
                <div className="d-flex justify-content-between align-items-center py-2">
                  <div className="fw-bold " style={{ maxWidth: "350px" }}>
                    Filters
                  </div>
                  {/* {isFilterActive && ( */}
                  <Button
                    color="link"
                    className="p-0 text-danger"
                    onClick={resetFilters}
                    style={{
                      textDecoration: "none",
                      visibility: isFilterActive ? "visible" : "hidden",
                    }}
                  >
                    Reset
                  </Button>
                  {/* )}  */}
                </div>

                {/* Industry Section */}
                <div className="filter-section mb-3">
                  <div
                    className="d-flex justify-content-between align-items-center py-2"
                    onClick={toggleIndustry}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">Industry</span>
                    {industryExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>

                  {industryExpanded && (
                    <div className="ps-2">
                      {(showAllIndustries
                        ? industries
                        : industries.slice(0, 5)
                      ).map((industry, index) => (
                        <div
                          key={index}
                          className={`filter-item py-1 d-flex align-items-center ${
                            selectedIndustry === industry.name
                              ? "text-primary"
                              : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleIndustryChange(industry.name)}
                        >
                          {/* {React.cloneElement(industry.icon, {
                            className: `me-2 ${
                              selectedIndustry === industry.name
                                ? "text-primary"
                                : "text-muted"
                            }`,
                          })} */}
                          <span>{industry.name}</span>
                        </div>
                      ))}
                      <div
                        className="filter-item py-1 d-flex align-items-center text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        <ChevronDown size={16} className="me-2" />
                        <span>Show more</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Section */}
                <div className="filter-section mb-3">
                  <div
                    className="d-flex justify-content-between align-items-center py-2"
                    onClick={togglePrice}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">Price</span>
                    {priceExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {priceExpanded && (
                    <div className="ps-2">
                      <FormGroup check className="mb-2">
                        <RadioInput
                          type="radio"
                          name="priceRadio"
                          id="freeOnly"
                          checked={priceFilter === "free"}
                          onChange={() => handlePriceChange("free")}
                        />
                        <Label check for="freeOnly" className="cursor-pointer">
                          Free only
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <RadioInput
                          type="radio"
                          name="priceRadio"
                          id="paidOnly"
                          checked={priceFilter === "paid"}
                          onChange={() => handlePriceChange("paid")}
                        />
                        <Label check for="paidOnly" className="cursor-pointer">
                          Paid only
                        </Label>
                      </FormGroup>
                    </div>
                  )}
                </div>

                {/* Installs Section */}
                <div className="filter-section mb-3">
                  <div
                    className="d-flex justify-content-between align-items-center py-2"
                    onClick={toggleInstalls}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">Installs</span>
                    {installsExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {installsExpanded && (
                    <div className="ps-2">
                      <FormGroup check className="mb-2">
                        <RadioInput
                          type="radio"
                          name="installsRadio"
                          id="installs1000Plus"
                          checked={installsFilter === "1000+"}
                          onChange={() => handleInstallsChange("1000+")}
                        />
                        <Label
                          check
                          for="installs1000Plus"
                          className="cursor-pointer"
                        >
                          1000+
                        </Label>
                      </FormGroup>
                      <FormGroup check className="mb-2">
                        <RadioInput
                          type="radio"
                          name="installsRadio"
                          id="installs500to1000"
                          checked={installsFilter === "500-1000"}
                          onChange={() => handleInstallsChange("500-1000")}
                        />
                        <Label
                          check
                          for="installs500to1000"
                          className="cursor-pointer"
                        >
                          500-1000
                        </Label>
                      </FormGroup>
                      <FormGroup check className="mb-2">
                        <RadioInput
                          type="radio"
                          name="installsRadio"
                          id="installs100to500"
                          checked={installsFilter === "100-500"}
                          onChange={() => handleInstallsChange("100-500")}
                        />
                        <Label
                          check
                          for="installs100to500"
                          className="cursor-pointer"
                        >
                          100-500
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <RadioInput
                          type="radio"
                          name="installsRadio"
                          id="installs0to100"
                          checked={installsFilter === "0-100"}
                          onChange={() => handleInstallsChange("0-100")}
                        />
                        <Label
                          check
                          for="installs0to100"
                          className="cursor-pointer"
                        >
                          0-100
                        </Label>
                      </FormGroup>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div
                className="flex-grow-1 ps-3"
                style={
                  {
                    // overflowY: "auto",
                  }
                }
              >
                {/* Tabs */}
                <Nav tabs className="border-0 mb-3">
                  <NavItem>
                    <NavLink
                      className={activeTab === "inbound" ? "active" : ""}
                      onClick={() => setActiveTab("inbound")}
                      style={{ cursor: "pointer" }}
                    >
                      <Phone size={16} className="me-1" /> Inbound
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "outbound" ? "active" : ""}
                      onClick={() => setActiveTab("outbound")}
                      style={{ cursor: "pointer" }}
                    >
                      <Upload size={16} className="me-1" /> Outbound
                    </NavLink>
                  </NavItem>
                </Nav>

                {/* Search Box */}
                <div className="mb-4">
                  <InputGroup>
                    <InputGroupText>
                      <Search size={16} />
                    </InputGroupText>
                    <Input
                      placeholder="Search by name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </div>

                {/* Templates Grid */}
                <Row>
                  {filteredTemplates.length > 0 ? (
                    filteredTemplates.map((template) => (
                      <Col md={6} className="mb-4" key={template.id}>
                        <Card className="h-100">
                          <CardBody>
                            <div className="mb-2">
                              <h5 className="mb-1">{template.title}</h5>
                              <div className="mb-2">
                                <Badge color="light" className="me-1">
                                  {getIndustryIcon(template.industry)}
                                  <span className="ms-1">
                                    {template.industry}
                                  </span>
                                </Badge>
                              </div>
                              <div className="mb-2">
                                {template.tags.map((tag, idx) => (
                                  <Badge
                                    color="light"
                                    className="me-1"
                                    key={idx}
                                  >
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-muted small">
                                {template.description}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <Download
                                  size={16}
                                  className="me-1 text-muted"
                                />
                                <small className="text-muted">
                                  {template.downloads}
                                </small>
                              </div>
                              <Badge color="light" pill>
                                {template.price === "free" ? "Free" : "Paid"}
                              </Badge>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <Col xs={12} className="text-center py-5">
                      <p className="text-muted">
                        We couldn't find any inbound templates <br />
                        Please check your filters or request a new one at
                        contact@synthflow.ai
                      </p>
                      {/* <Button color="primary" onClick={resetFilters}>
                        Reset Filters
                      </Button> */}
                    </Col>
                  )}
                </Row>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Container>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Teams;
