import React from "react";
import "../styles/TemplatePreview.css";

const TemplatePreview = ({ template }) => {
  switch (template.name) {
    case "Modern":
      return (
        <div className="template-preview modern">
          <div className="header-bar"></div>
          <div className="section skills"></div>
          <div className="section history"></div>
        </div>
      );
    case "Classic":
      return (
        <div className="template-preview classic">
          <div className="header-bar"></div>
          <div className="section skills"></div>
          <div className="section history"></div>
        </div>
      );
    case "Creative":
      return (
        <div className="template-preview creative">
          <div className="header-bar"></div>
          <div className="section skills"></div>
          <div className="section history"></div>
        </div>
      );
    default:
      return null;
  }
};

export default TemplatePreview;
