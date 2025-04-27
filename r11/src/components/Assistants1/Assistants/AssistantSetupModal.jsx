import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function AssistantSetupModal({ isOpen, toggle, onBack, actionType, t }) {
  const assistantsType = useMemo(() => [
    {
      type: "Inbound",
      description:
        "Automate Calls within workflows using Zapier, REST API, or HighLevel",
      icon: "",
    },
    {
      type: "Outbound",
      description:
        "Manage incoming calls via phone, Zapier , REST API, or HighLevel",
      icon: "",
    },
    {
      type: "Widget",
      description: "Create a widget and easily embed it anywhere in your app",
      icon: "",
    }
  ], []);

  const quickAssistantSetup = useMemo(()=>[
    {
      type:'Inbound',
      description:'Welcome and assist visitors with ease. The AI receptionist handles all inbound communication'
    }
  ])

  const renderContent = () => {
    switch (actionType) {
      case "createAssistantFromScratch":
        return (
          <div className="row g-3" >
            {assistantsType.map((type, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border rounded p-3 h-100">
                  <div className="mb-2">
                    <HiArrowUpRight size={24} />
                  </div>
                  <div className="fw-bold mb-1">
                    {type.type}
                  </div>
                  <div className="text-muted">
                    {type.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "quickAssistantSetup":
        return (
          <div className="row g-3" >
            {quickAssistantSetup.map((type, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border rounded p-3 h-100">
                  <div className="mb-2">
                    <HiArrowUpRight size={24} />
                  </div>
                  <div className="fw-bold mb-1">
                    {type.type}
                  </div>
                  <div className="text-muted">
                    {type.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "browseTemplates":
        return <div>

        </div>;
      default:
        return <div>{t("Unknown action")}</div>;
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="container" style={{minWidth:'880px'}} fullscreen={actionType === "browseTemplates"}>
      <ModalHeader toggle={toggle}>
        <div className="mb-3" onClick={onBack} style={{ cursor: "pointer" }}>
          ← {" "} {t("Choose Type of Assistant")}
        </div>
      </ModalHeader>
      <ModalBody>
        {renderContent()}
      </ModalBody>
    </Modal>
  );
}

AssistantSetupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  actionType: PropTypes.string,
  t: PropTypes.func.isRequired,
};

export default AssistantSetupModal;
