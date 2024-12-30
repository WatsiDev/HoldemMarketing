import React from "react";

const IframeBlocker = () => {
  const preventBodyScroll = () => {
    document.body.style.overflow = "hidden"; // Bloquea el scroll del body
  };

  const allowBodyScroll = () => {
    document.body.style.overflow = ""; // Restaura el scroll del body
  };

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      onMouseEnter={preventBodyScroll}
      onMouseLeave={allowBodyScroll}
    >
      <iframe
        src="https://my.spline.design/untitled-216dbc3a044347bd8cff94f9ab0d740c/"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default IframeBlocker;
