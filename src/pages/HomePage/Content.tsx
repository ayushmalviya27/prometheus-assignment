import React from 'react';

import './Content.css';

export const Content = () => {
  return (
    <div className="container py-2 px-2">
      <p className="content__text">Every acccount comes with:</p>
      <ul className="content__text">
        <li>One-on-one Mentorship</li>
        <li>Alum connects with PMs</li>
        <li>Loads of fun</li>
      </ul>
      <p className="content__text">We love tech, and we hope you do too!</p>
      <p className="content__text">
      Prometheus is the Product Management and Technology Club at XLRI. A merger of a 36-year-old tech committee - SOCRATES, with ProdUX, the ProdMan Society, to meet the changing market demands of BizTech and PM roles in XLRI led to the idea of a dedicated society for the same. We organise India's largest Techno Product Management fest - TeXLence, Tech-Talks and strive to create leaders in this field.
      </p>
    </div>
  );
};
