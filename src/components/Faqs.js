import React, { useState } from "react";
import Accordion from "../hoccomponents/Accordian";

const Faqs = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title:
        "What Is The Minimum Requirement Of Director For One Person Company Registration?",
      data: `The minimum requirement of directors for a one person company is one (1), additionally, there is a requirement of one member &amp; nominee.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "Which Form Of Entity Is Favourable To Start A New Business?",
      data: `The most suitable form of entity to start a new business depends on various factors such as nature, scale, and goals of the business. Common forms include sole proprietorship, partnership, limited liability partnership (LLP), and private limited company.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "How & Where I Have To Apply For Online Company Registration In India?",
      data: "Online company registration in India can be done through the Ministry of Corporate Affairs (MCA) portal. The process involves obtaining Digital Signature Certificates (DSC), Director Identification Numbers (DIN), and filing the required forms and documents electronically",
      isOpen: false,
    },
    {
      key: 4,
      title:
        "What Are The Documents Required For Online Company Registration In India?",
      data: `Online company registration in India can be done through the Ministry of Corporate Affairs (MCA) portal. The process involves obtaining Digital Signature Certificates (DSC), Director Identification Numbers (DIN), and filing the required forms and documents electronically.`,
      isOpen: false,
    },
    {
      key: 5,
      title:
        "Can Person Resident Outside India/ NRI/ Foreigner Become A Director In Private Limited Company?",
      data: `The significant documents required for company registration are Pan Card & aadhar card of directors, passport size photos of directors, conveyance deed or rent agreement, utility bills etc. along with the prescribed documents which can be prepared with the help of professional.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "Can I Incorporate Company By Myself?",
      data: `Yes, you can incorporate a company by yourself using online platforms provided by the Ministry of Corporate Affairs (MCA) or seek assistance from professional service providers for guidance and support throughout the registration process.`,
      isOpen: false,
    },
    {
      key: 7,
      title: "To register for GST, what paperwork do I need?",
      data: `Businesses with annual revenues of up to INR 1.50 Crore may participate in the Composition Scheme. That implies they may avoid charging and paying the standard tax rates.`,
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <h2 class="text-3xl font-bold text-gray-800 mt-9 mb-5  text-center">
        FAQs
      </h2>

      <div className="p-2 m-8">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
