import React from "react";
import ConstructionEmailList from "./ConstructionEmailList";
import AviationEmailList from "./AviationEmailList";
import IndustryEmailList from "./IndustryEmailList";
import AutomotiveMailList from "./AutomotiveEmailList";

const RenderEmailList = () => {
  switch (window.location.pathname) {
    case "/construction-industry-mailing-list":
      return <ConstructionEmailList />;
    case "/aviation-industry-email-list":
      return <AviationEmailList />;
    case "/industry-email-list":
      return <IndustryEmailList />;
      case "/automotive-mailing-lists":
        return <AutomotiveMailList />;
    default:
      break;
  }
};

export default RenderEmailList;
