import React from "react";
import Table from "./Table";
import Typography from "@material-ui/core/Typography";

export default function TableList() {
  return (
    <div className="table-list-container" style={{ padding: "1rem" }}>
      <div className="user-profile-header">
        <Typography variant="h6" noWrap>
          Requirements Table
        </Typography>
      </div>
      <Table />
    </div>
  );
}
