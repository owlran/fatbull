import { SVGProps } from "react";

const Home = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34146 0C5.51304 0 4.84146 0.671573 4.84146 1.5C4.84146 2.32843 5.51304 3 6.34146 3H16.7578V12.4233C16.7578 13.2518 17.4294 13.9233 18.2578 13.9233C19.0863 13.9233 19.7578 13.2518 19.7578 12.4233V2.5C19.7578 1.11929 18.6386 0 17.2578 0H6.34146ZM2 4.91463H13.122C14.2265 4.91463 15.122 5.81007 15.122 6.91463V18.0366C15.122 19.1412 14.2265 20.0366 13.122 20.0366H2C0.895432 20.0366 0 19.1412 0 18.0366V6.91464C0 5.81007 0.89543 4.91463 2 4.91463Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Home;
