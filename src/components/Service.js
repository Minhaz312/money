import React from "react";
import Fade from "react-reveal/Fade";

export default function Service({ image, title }) {
  return (
    <Fade bottom>
      <div className="border rounded bg-light shadow-sm my-3">
        <div
          style={{
            overflow: "hidden",
            height: "100%",
            minheight: "250px",
            borderRadius: "15px"
          }}
        >
          <img
            src={`./images/services/${image}`}
            alt={`${image}`}
            style={{ width: "100%", height: "250px" }}
            className="service-image"
          />
        </div>
        {title != null ? <h5 className="my-3">{title}</h5> : null}
      </div>
    </Fade>
  );
}
