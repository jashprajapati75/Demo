import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

// import { customSelectStyle, itemsPerPage } from "../../../Utils";

const PerPage = ({t,
  setPageSize = () => {},
  pageSize,
  resetPage = () => {},
}) => {
  const handleChange = (value, setState) => {
    setState(value);
    resetPage();
  };

  return (
    <div className="d-flex justify-content-between gap-1 pb-2">
      <p className="mt-2 ms-2 text-muted">{t("Rows per page :")}</p>
      <Select
        name="Page size"
        onChange={(option) => handleChange(option, setPageSize)}
        // options={itemsPerPage}
        value={pageSize}
        placeholder="Select"
        menuPortalTarget={document.body}
        // styles={{
        //   ...customSelectStyle.initialSelect,
        //   menuPortal: (base) => ({ ...base, zIndex: 1050 }),
        // }}
      />
      {/* <p className="mt-1">Entries</p> */}
    </div>
  );
};

PerPage.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(PerPage);