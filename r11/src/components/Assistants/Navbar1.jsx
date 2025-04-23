import React from 'react'
import { Container, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

const Navbar1 = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e)=>{
    setSearchQuery(e.target.value)
  }
  return (
    <React.Fragment>
      <Container fluid>
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          {/* Left Section - Nav Links */}
          <div className="d-flex gap-4 flex-wrap">
            <div className="border border-primary rounded-pill d-flex align-items-center ps-3 pe-3 bg-primary bg-opacity-10 text-weight-bold">
              <Link className="nav-link fs-5" to="/assistants">
                Assistants
              </Link>
            </div>
            <div className="border border-primary rounded-pill d-flex align-items-center ps-3 pe-3 bg-primary bg-opacity-10 text-weight-bold">
              <Link className="nav-link fs-5" to="/assistants/teams">
                Teams
              </Link>
            </div>
          </div>

          {/* Right Section - Search and Buttons */}
          <div className="d-flex gap-2 flex-wrap align-items-center">
            {/* Search Bar */}
            <div className="position-relative">
              <Input
                type="text"
                placeholder="Search"
                name="search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="ps-5"
                style={{ width: "15rem", minWidth: "200px" }}
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
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </i>
            </div>

            {/* Filter Button */}
            <Button className="bg-white border rounded-3 p-1 ps-2 pe-2">
              <i className="ri-filter-line text-muted fs-4"></i>
            </Button>

            {/* Create Workspace Button */}
            <Button className="bg-dark border rounded-3">
              <div className="d-flex gap-2 align-items-center">
                <i className="ri-add-line text-white"></i>
                <span className="text-white">Create Workspace</span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Navbar1;

