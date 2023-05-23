import React from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  console.log("process.env.PRODUCTION_DOMAIN", process.env.PRODUCTION_DOMAIN);
  return (
    <div>
      <h1>Hi There!</h1>
      <MarketingApp />
    </div>
  );
};
