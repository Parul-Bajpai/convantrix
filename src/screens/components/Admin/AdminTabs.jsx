import React from "react";
import TableList from "./TableListContainer/TableList";
export default function AdminTabs(props) {
  switch (window.location.href.split("/").pop()) {
    case "requirementsList":
      return <TableList />;
    default:
      return <TableList />;
  }
}
