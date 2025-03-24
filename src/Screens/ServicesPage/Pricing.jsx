import React from "react";
import { prices } from "../../data/servicesprices";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="price-list-header font-color-2">Price List</h1>
      <p className="font-color-2">
        Our pricing plans are designed to meet the needs of all users.
      </p>
      <p className="font-color-2 tag">We can give discounts upto 50%.</p>
      <div className="table-container">
        {prices.map((item, index) => (
          <table key={index} className="pricing-table">
            <div>
              <h1 className="font-color-4 category-heading">
                {item.categoryName}
              </h1>
            </div>
            <div className="services-prices">
              <tbody>
                {item.services.map((service, innerIDX) => (
                  <tr key={innerIDX} className="item-price font-color-2">
                    <td>{service.name}</td>
                    <td>₱{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </div>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
