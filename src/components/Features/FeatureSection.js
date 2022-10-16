import React from "react";
import "./FeatureSection.css";
import FeatureItems from "./FeatureItems";

const FeatureSection = () => {
  return (
    <div className="featureSection">
      <p className="featureHeading">
        Why <span className="kredColor">KredX</span> For{" "}
      </p>
      <p className="featureHeading"> Invoice Discounting?</p>
      <div className="featuresGrid">
        <FeatureItems />
      </div>
    </div>
  );
};

export default FeatureSection;
