import React from "react";

const DiagnosticServiceSection = ({ title, image, description, services }) => (
  <div className="about-us-imgcontainer about-us-imgcontainer-1">
    <img
      src={image}
      alt={title}
      style={{ maxHeight: "230px", maxWidth: "700px", borderRadius: "16px" }}
    />
    <h1 className="services-text font-color-1">{title}</h1>
    <p className="font-color-1">{description}</p>
    <div className="services-diagnostic-cont">
      {services.map((service) => (
        <div key={service.serviceName} className="services-diag-item">
          <h3 className="font-color-4 font-weight-900">
            {service.serviceName}
          </h3>
          {service.serviceScope.length > 0 && (
            <div className="sub-services-cont">
              {service.serviceScope.map((subservice, index) => (
                <p key={index} className="sub-services-item font-color-1">
                  {subservice}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default DiagnosticServiceSection;
