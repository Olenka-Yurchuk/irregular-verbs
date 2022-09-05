import * as React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table as MuiTable,
} from "@mui/material";
import { Verbs } from "../api/verbs";

const Table = ({ verbs }: { verbs: Verbs }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Verb</TableCell>
            <TableCell align="left">Past Form</TableCell>
            <TableCell align="left">Past Participle Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(verbs).map(([verb, forms]) => (
            <TableRow
              key={verb}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {verb}
              </TableCell>
              <TableCell component="th" scope="row">
                {forms.past}
              </TableCell>
              <TableCell align="left">
                {forms.participles?.join(" / ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
