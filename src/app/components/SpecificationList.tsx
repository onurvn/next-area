import React from "react";

interface SpecificationListProps {
  benefit: string;
}

const SpecificationList = ({ benefit }: SpecificationListProps) => {
  return (
    <div className="w-full flex items-center justify-start gap-2 border-b border-line p-8 ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="10px"
          overflow="visible"
          preserveAspectRatio="none"
          style={{ display: "block" }}
          viewBox="0 0 11 8"
          width="12px"
        >
          <path
            d="M10.2083 0.8225L3.20833 7.8225L0 4.61417L0.8225 3.79167L3.20833 6.17167L9.38583 0L10.2083 0.8225Z"
            fill="var(--fill-0, #485C11)"
            id="Vector"
          ></path>
        </svg>
      </div>
      <p className="text-sm roboto-mono">{benefit}</p>
    </div>
  );
};

export default SpecificationList;
