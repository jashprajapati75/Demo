// CreateAssistantModal.js
import React,{useMemo,useState} from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CreateAssistantCard from "./CreateAssistantCard";
import { IoSparklesOutline } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import AssistantSetupModal from "./AssistantSetupModal";

function CreateAssistantModal({ isOpen, toggle, t }) {
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedActionType, setSelectedActionType] = useState(null);

  const createAssistantActions = useMemo(
    () => [
      {
        actionType: "createAssistantFromScratch",
        heading: "Start from scratch",
        description: "Use presets to streamline setup & adjust settings",
        // icon: "ri-add-line",
        icon:<IoAddSharp />,
        styleClass:
          "col d-flex flex-column border border-dashed rounded-4 justify-content-center gap-3 align-items-center modal-subdiv p-0",
      },
      {
        actionType: "quickAssistantSetup",
        heading: "Quick Assistant Setup",
        description: "Build your Ai Assistant from the ground up",
        // icon: "ri-star-line",
        icon:<IoSparklesOutline />,
        styleClass:
          "col d-flex flex-column border rounded-4 justify-content-center gap-3 align-items-center modal-subdiv p-0",
      },
      {
        actionType: "browseTemplates",
        heading: "Browse our Templates",
        description: "Get inspired by our templates to get started",
        // icon: "ri-layout-line",
        icon:<LuLayoutDashboard />,
        styleClass:
          "col d-flex flex-column border rounded-4 justify-content-center gap-3 align-items-center modal-subdiv p-0",
      },
    ],
    []
  );

  const handleCardClick = (actionType) => {
    setSelectedActionType(actionType);
    setSecondModalOpen(true);
    toggle(); // Close the first modal
  };

  const handleBackToFirstModal = () => {
    setSecondModalOpen(false);
    toggle(); // reopen first modal
  };

  return (
    <>
      {/* Main Create Assistant Modal */}
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        style={{ width: "880px", maxWidth: "880px" }}
        className="container"
      >
        <ModalHeader toggle={toggle} className="mb-1">
          <span className="text-dark" style={{ fontSize: "18px" }}>
            {t("Create New Assistant")}
          </span>
        </ModalHeader>
        <ModalBody className="px-4">
          <div className="row gap-4 pb-2 px-3">
            {createAssistantActions.map((action) => (
              <CreateAssistantCard
                key={action.actionType}
                styleProps={action.styleClass}
                heading={action.heading}
                description={action.description}
                icon={action.icon}
                actionType={action.actionType}
                onClick={() => handleCardClick(action.actionType)}
                t={t}
              />
            ))}
          </div>
        </ModalBody>
      </Modal>

      {/* Second Modal */}
      <AssistantSetupModal
        isOpen={secondModalOpen}
        toggle={() => setSecondModalOpen(false)}
        onBack={handleBackToFirstModal}
        actionType={selectedActionType}
        t={t}
      />
    </>
  );
}

CreateAssistantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default CreateAssistantModal;
