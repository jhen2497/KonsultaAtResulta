import React, { useState } from "react";
import { prices } from "../../data/servicesprices";
import radialGradient2 from "../../assets/radial-gradient2.png";

const Pricing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    for (let category of prices) {
      for (let service of category.services) {
        if (service.name.toLowerCase().includes(term)) {
          document.getElementById(category.categoryName)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          return;
        }
      }
    }

    alert("Service not found");
  };
  return (
    <div className="pricing">
      <img className="radial-gradient2" src={radialGradient2} alt="" />
      <h1 className="price-list-header font-color-2">Price List</h1>
      <p className="font-color-2 tag">Discounts available up to <span className="highlighted-text">50%</span> off on select services.</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="table-container">
        {prices.map((item, index) => (
          <table key={index} className="pricing-table">
            <div>
              <h1 className="font-color-4 category-heading" id={item.categoryName}>
                {item.categoryName}
              </h1>
            </div>
            <div className="services-prices">
              <tbody>
                {item.services.map((service, innerIDX) => {
                  const isMatch = searchTerm && service.name.toLowerCase().includes(searchTerm.toLowerCase());

                  return (
                    <tr key={innerIDX} className={`item-price font-color-2 ${isMatch ? "highlight-row" : ""}`}>
                      <td dangerouslySetInnerHTML={{ 
                        __html: service.name.replace(
                          new RegExp(`(${searchTerm})`, "gi"), 
                          (match) => `<span class="highlight">${match}</span>`
                        ) 
                      }} />
                      <td className="price-column">
                        <div className="price-content font-color-4">₱{service.price}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
