import React, { useCallback, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
// import SubModal from "./SubModal";

function Sidebar({
  
  isFilterActive,
  industries,
  setPriceFilter,
  priceFilter,
  setSelectedIndustry,
  selectedIndustry,
  setInstallsFilter,
  installsFilter,
}) {
  const [industryExpanded, setIndustryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [installsExpanded, setInstallsExpanded] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const toggleIndustry = () => setIndustryExpanded(!industryExpanded);

  const togglePrice = () => setPriceExpanded(!priceExpanded);

  const toggleInstalls = () => setInstallsExpanded(!installsExpanded);

  const resetFilters = () => {
    setSelectedIndustry(null);
    setPriceFilter(null);
    setInstallsFilter(null);
  };

  const handleIndustryChange = useCallback(
    (industry) => {
      setSelectedIndustry(selectedIndustry === industry ? null : industry);
    },
    [selectedIndustry, setSelectedIndustry]
  );

  const handlePriceChange = useCallback(
    (value) => {
      setPriceFilter(priceFilter === value ? null : value);
    },
    [priceFilter, setPriceFilter]
  );

  const handleInstallsChange = useCallback(
    (value) => {
      setInstallsFilter(installsFilter === value ? null : value);
    },
    [installsFilter, setInstallsFilter]
  );

  return (
    <div className="sidebar d-flex flex-column border-end bg-light">
      <div className="d-flex justify-content-between text-start ps-3 py-3 border-bottom fs-5">
        <p className="mb-0">{"Filters"}</p>
        {isFilterActive && (
          <Button
            color="link"
            className="pe-1 pt-0 pb-0 text-primary fs-6"
            style={{
              textDecoration: "none",
            }}
            onClick={resetFilters}
          >
            <i className="ri-filter-2-line"></i>
            {"reset"}
          </Button>
        )}
      </div>

      {/* industries */}
      <div className="industries border-bottom">
        <div
          className="d-flex justify-content-between text-start ps-3 py-3 fs-5"
          onClick={toggleIndustry}
        >
          <p className="mb-0">{"Industries "}</p>
          <i
            className={`pe-2 ri-arrow-${
              industryExpanded ? "up" : "down"
            }-s-line`}
          ></i>
        </div>
        {industryExpanded && (
          <div className="ps-4 pb-2">
            {(showAllIndustries ? industries : industries.slice(0, 5)).map(
              (industry, index) => (
                <div
                  key={index}
                  className={`filter-item py-1 d-flex gap-3 align-items-center ${
                    selectedIndustry === industry.name
                      ? "text-primary"
                      : "text-muted"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIndustryChange(industry.name)}
                >
                  <i className={`${industry.icon} text-muted`}></i>
                  <span>{industry.name}</span>
                </div>
              )
            )}
            <div
              className="filter-item py-1 d-flex align-items-center gap-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setShowAllIndustries(!showAllIndustries)}
            >
              <span className="fs-5">
                {showAllIndustries ? "See less" : "See more"}
              </span>
              <i
                className={`pe-2 ri-arrow-${
                  showAllIndustries ? "up" : "down"
                }-s-line`}
              ></i>
            </div>
          </div>
        )}
      </div>
      {/* prices */}
      <div className="prices border-bottom">
        <div
          className="d-flex justify-content-between text-start ps-3 py-3 fs-5 "
          onClick={togglePrice}
        >
          <p className="mb-0">{"Prices"}</p>
          <i
            className={`pe-2 ri-arrow-${priceExpanded ? "up" : "down"}-s-line`}
          ></i>
        </div>
        {priceExpanded && (
          <div className="ps-4 text-muted mb-3">
            <FormGroup check className="mb-2">
              <Input
                type="radio"
                name="priceRadio"
                id="freeOnly"
                checked={priceFilter === "free"}
                onChange={() => handlePriceChange("free")}
              />
              <Label check for="freeOnly" className="cursor-pointer">
                {"Free only"}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="radio"
                name="priceRadio"
                id="paidOnly"
                checked={priceFilter === "paid"}
                onChange={() => handlePriceChange("paid")}
              />
              <Label check for="paidOnly" className="cursor-pointer">
                {"Paid only"}
              </Label>
            </FormGroup>
          </div>
        )}
      </div>
      {/* installs */}
      <div className="installs border-bottom" onClick={toggleInstalls}>
        <div className="d-flex justify-content-between text-start ps-3 py-3 fs-5">
          <p className="mb-0">{"Installs"}</p>
          <i
            className={`pe-2 ri-arrow-${
              installsExpanded ? "up" : "down"
            }-s-line`}
          ></i>
        </div>
        {installsExpanded && (
          <div className="ps-4 text-muted mb-3">
            <FormGroup check className="mb-2">
              <Input
                type="radio"
                name="installsRadio"
                id="installs1000Plus"
                checked={installsFilter === "1000+"}
                onChange={() => handleInstallsChange("1000+")}
              />
              <Label check for="installs1000Plus" className="cursor-pointer">
                1000+
              </Label>
            </FormGroup>
            <FormGroup check className="mb-2">
              <Input
                type="radio"
                name="installsRadio"
                id="installs500to1000"
                checked={installsFilter === "500-1000"}
                onChange={() => handleInstallsChange("500-1000")}
              />
              <Label check for="installs500to1000" className="cursor-pointer">
                500-1000
              </Label>
            </FormGroup>
            <FormGroup check className="mb-2">
              <Input
                type="radio"
                name="installsRadio"
                id="installs100to500"
                checked={installsFilter === "100-500"}
                onChange={() => handleInstallsChange("100-500")}
              />
              <Label check for="installs100to500" className="cursor-pointer">
                100-500
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="radio"
                name="installsRadio"
                id="installs0to100"
                checked={installsFilter === "0-100"}
                onChange={() => handleInstallsChange("0-100")}
              />
              <Label check for="installs0to100" className="cursor-pointer">
                0-100
              </Label>
            </FormGroup>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
