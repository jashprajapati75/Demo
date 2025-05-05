import React, { useEffect, useMemo, useState } from "react";

import { ModalBody, ModalHeader } from "reactstrap";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Teams({ toggle, t }) {
  const industries = useMemo(
    () => [
      { name: "Real Estate", icon: "ri-building-4-line" },
      { name: "Healthcare", icon: "ri-heart-pulse-line" },
      { name: "Solar", icon: "ri-sun-line" },
      { name: "Recruitment", icon: "ri-user-search-line" },
      { name: "Car Dealership", icon: "ri-roadster-line" },
      { name: "Mortgage", icon: "ri-hand-coin-line" },
      { name: "Insurance", icon: "ri-shield-check-line" },
      { name: "Education", icon: "ri-book-line" },
      { name: "Retail", icon: "ri-store-line" },
    ],
    []
  );
  const allTemplates = useMemo(
    () => [
      {
        id: 1,
        title: "Mortgage Receptionist",
        industry: "Mortgage",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 1000,
        type: "outbound",
      },
      {
        id: 2,
        title: "Mortgage Receptionist",
        industry: "Solar",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 500,
        type: "inbound",
      },
      {
        id: 3,
        title: "Mortgage Receptionist",
        industry: "Healthcare",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 4,
        title: "Mortgage Receptionist",
        industry: "Recruitment",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 5,
        title: "Mortgage Receptionist",
        industry: "Mortgage",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 1010,
        type: "inbound",
      },
      {
        id: 6,
        title: "Mortgage Receptionist",
        industry: "Solar",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 10,
        type: "inbound",
      },
      {
        id: 7,
        title: "Mortgage Receptionist",
        industry: "Healthcare",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 8,
        title: "Mortgage Receptionist",
        industry: "Recruitment",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "outbound",
      },
      {
        id: 9,
        title: "Mortgage Receptionist",
        industry: "Mortgage",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 1000,
        type: "inbound",
      },
      {
        id: 10,
        title: "Mortgage Receptionist",
        industry: "Solar",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 11,
        title: "Mortgage Receptionist",
        industry: "Healthcare",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 12,
        title: "Mortgage Receptionist",
        industry: "Recruitment",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 13,
        title: "Mortgage Receptionist",
        industry: "Mortgage",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "paid",
        cost: 1000,
        type: "inbound",
      },
      {
        id: 14,
        title: "Mortgage Receptionist",
        industry: "Solar",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
      {
        id: 15,
        title: "Mortgage Receptionist",
        industry: "Healthcare",
        tags: ["Receptionist", "Real-Time Booking"],
        description:
          "Meet Michael, an AI assistant for your mortgage company, committed to supporting clients with their home loan needs. His primary role is to gather essential caller details, guide users through pre-approval or account-related inquiries, and provide clear next steps for loan applications. Michael ensures an efficient and seamless process, helping clients navigate mortgage options confidently and effectively.",
        downloads: 356,
        price: "free",
        cost: 0,
        type: "inbound",
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("inbound");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [installsFilter, setInstallsFilter] = useState(null);
  const [filteredTemplates, setFilteredTemplates] = useState(allTemplates);

  useEffect(() => {
    let result = allTemplates;

    result = allTemplates.filter((template) => template.type === activeTab);

    if (searchQuery) {
      result = result.filter(
        (template) =>
          template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          template.industry.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedIndustry) {
      result = result.filter(
        (template) => template.industry === selectedIndustry
      );
    }

    if (priceFilter) {
      result = result.filter((template) => template.price === priceFilter);
    }

    if (installsFilter) {
      switch (installsFilter) {
        case "1000+":
          result = result.filter((template) => template.cost >= 1000);
          break;
        case "500-1000":
          result = result.filter(
            (template) => template.cost >= 500 && template.cost <= 1000
          );
          break;
        case "100-500":
          result = result.filter(
            (template) => template.cost >= 100 && template.cost <= 500
          );
          break;
        case "0-100":
          result = result.filter(
            (template) => template.cost >= 0 && template.cost <= 100
          );
          break;
        default:
          break;
      }
    }

    setFilteredTemplates(result);

    setIsFilterActive(
      selectedIndustry !== null ||
        priceFilter !== null ||
        installsFilter !== null
    );
  }, [activeTab, searchQuery, selectedIndustry, priceFilter, installsFilter]);

  return (
    <>
      <ModalHeader toggle={toggle} className="pb-3">
        Select Template
      </ModalHeader>
      <hr className="p-0 m-0"></hr>
      <ModalBody className="p-0 ">
        <div className="d-flex template-modal-body">
          {/* sidebar */}
          <Sidebar
            isFilterActive={isFilterActive}
            industries={industries}
            priceFilter={priceFilter}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            setPriceFilter={setPriceFilter}
            installsFilter={installsFilter}
            setInstallsFilter={setInstallsFilter}
            t={t}
          />  

          {/* main */}
          <MainContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredTemplates={filteredTemplates}
            industries={industries}
          />
        </div>
      </ModalBody>
    </>
  );
}

export default Teams;
