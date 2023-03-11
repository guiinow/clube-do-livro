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
    color: tema.palette.secondary.dark,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: tema.palette.primary.light,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, titulo, autor, editora, descricao) {
  return { id, titulo, autor, editora, descricao };
}


const rows = [
   createData(1, 'titulo', 'autor', 'editora', 'descricao'),
   createData(2, 'titulo', 'autor', 'editora', 'descricao'),
   createData(3, 'titulo', 'autor', 'editora', 'descricao'),
   createData(4, 'titulo', 'autor', 'editora', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
   createData(5, 'titulo', 'autor', 'editora', 'descricao'),
   createData(6, 'titulo', 'autor', 'editora', 'descricao'),
   createData(7, 'titulo', 'autor', 'editora', 'descricao'),
   createData(8, 'titulo', 'autor', 'editora', 'descricao'),
   createData(9, 'titulo', 'autor', 'editora', 'descricao'),
   createData(10, 'titulo', 'autor', 'editora', 'descricao'),
   createData(11, 'titulo', 'autor', 'editora', 'descricao'),
   createData(12, 'titulo', 'autor', 'editora', 'descricao'),
   createData(13, 'titulo', 'autor', 'editora', 'descricao'),
    
];

function Livros(){
  return(
  <div class="Container">
  <div class="Main">
    <div class="tabela">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">TÍTULO</StyledTableCell>
            <StyledTableCell align="left">AUTOR</StyledTableCell>
            <StyledTableCell align="left">EDITORA</StyledTableCell>
            <StyledTableCell align="left">DESCRIÇÃO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.titulo}</StyledTableCell>
              <StyledTableCell align="left">{row.autor}</StyledTableCell>
              <StyledTableCell align="left">{row.editora}</StyledTableCell>
              <StyledTableCell align="left">{row.descricao}</StyledTableCell>
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


export default Livros;