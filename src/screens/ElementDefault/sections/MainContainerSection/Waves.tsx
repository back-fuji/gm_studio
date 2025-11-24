import React from "react";

export const Waves: React.FC = () => {
  return (
    <div className="absolute bottom-[0%] left-0 w-full h-[15vh] min-h-[100px] max-h-[150px] pointer-events-none max-md:h-[40px] max-md:min-h-[40px]">
      <svg
        className="waves w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        style={{ shapeRendering: "auto" }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
            className="animate-wave-7s"
            style={{ animationDelay: "-2s" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
            className="animate-wave-10s"
            style={{ animationDelay: "-3s" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
            className="animate-wave-13s"
            style={{ animationDelay: "-4s" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="#fff"
            className="animate-wave-20s"
            style={{ animationDelay: "-5s" }}
          />
        </g>
      </svg>
    </div>
  );
};

