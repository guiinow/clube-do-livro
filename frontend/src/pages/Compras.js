import * as React from 'react';
import "./styles/inicial.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { createTheme, styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const tema = createTheme({
  palette: {
    primary: {
      main: '#221f28',
      light: '#eae8ed' ,
    },
    secondary: {
      main: '#fff',
      dark: '#000'
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: tema.palette.primary.main,
    color: tema.palette.secondary.main,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: tema.palette.primary.light
    // theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, preco, data) {
  return { id, preco, data };
}


const rows = [
   createData(1, 'preco', 'data' ) ,
   createData(2, 'preco', 'data' ) ,
   createData(3, 'preco', 'data' ) ,
   createData(4, 'preco', 'data' ) ,
   createData(5, 'preco', 'data' ) ,
   createData(6, 'preco', 'data' ) ,
   createData(7, 'preco', 'data' ) ,
   createData(8, 'preco', 'data' ) ,
   createData(9, 'preco', 'data' ) ,
   createData(10, 'preco', 'data' ) ,
   createData(11, 'preco', 'data' ) ,
   createData(12, 'preco', 'data' ) ,
   createData(13, 'preco', 'data' ) ,

 
];

function Compras(){
  return(
  <div class="Container">
  <div class="Main">
    <div class="tabela">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">PREÇO</StyledTableCell>
            <StyledTableCell align="left">DATA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.preco}</StyledTableCell>
              <StyledTableCell align="left">{row.data}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>

</div>
  );
}


export default Compras;
