import React,{useState} from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

function CreateAssistantCard({
    t,
    heading,
    description,
    icon,
    styleProps,
    actionType,
    onClick,
  }) {
    return (
      <div className={styleProps} onClick={onClick}>
        <div className="border rounded-circle icon-div icons d-flex justify-content-center align-items-center bg-light">
          <div>
            {/* <i className={`${icon} text-muted text-center icon-text`}></i> */}
            {/* <IoSparklesOutline /> */}
            {icon}
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="fw-medium subdiv-heading mb-1">{t(heading)}</div>
          <div className="text-center w-75 text-muted icon-div-text">
            {t(description)}
          </div>
        </div>
      </div>
    );
  }

CreateAssistantCard.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(CreateAssistantCard);
