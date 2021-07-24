import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { getQuotes } from "../../../ApiServices/ApiService";
const columns = [
  { id: "name", label: "User Name", minWidth: 100 },
  { id: "email", label: "Email Id", minWidth: 100 },
  {
    id: "phone",
    label: "Mobile Number",
    minWidth: 100,
  },
  {
    id: "company",
    label: "Company",
    minWidth: 100,
  },
  {
    id: "requirement",
    label: "Requirement",
    minWidth: 100,
  },
];

function createData(userName, emailId, mobile, company, requirement) {
  return { userName, emailId, mobile, company, requirement };
}

const rows = [
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
  createData(
    "Vikas",
    "vikas.bisati@hexooid.com",
    "9398990239",
    "Convantrix",
    "Email List"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function CustomTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getQuotes().then((res) => {
      console.log("data", res);
      setRows(res.data.data);
    });
  }, []);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length>0 &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows && rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
