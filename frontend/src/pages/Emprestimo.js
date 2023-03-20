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
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

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

function createData(id, idAssociado, idLivro, duracao, status, criacao, atualizacao) {
  return { id, idAssociado, idLivro, duracao, status, criacao, atualizacao };
}


const rows = [
   createData(1, 1, 1, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(2, 2, 2, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(3, 3, 3, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(4, 4, 4, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(5, 5, 5, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(6, 6, 6, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(7, 7, 7, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(8, 8, 8, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(9, 9, 9, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(10, 10, 1, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(11, 11, 1, 'duracao', 'status', 'criacao', 'atualizacao') ,
   createData(12, 12, 1, 'duracao', 'status', 'criacao', 'atualizacao') ,

];

function Emprestimo(){
  const navigate = useNavigate()
  const goCreate = () =>{
    navigate('/emprestimo/cadastro')
  }
  return(
  <div class="Container">
  <Navbar />
  <div class="Main">
  <div class='botao-div'>
      <button type="button" class='botao' onClick={goCreate}>
        Cadastrar Empréstimo
      </button>
    </div>
    <div class="tabela">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">ID ASSOCIADO</StyledTableCell>
            <StyledTableCell align="left">ID LIVRO</StyledTableCell>
            <StyledTableCell align="left">DURAÇÃO</StyledTableCell>
            <StyledTableCell align="left">STATUS</StyledTableCell>
            <StyledTableCell align="left">CRIADO EM:</StyledTableCell>
            <StyledTableCell align="left">ATUALIZADO EM:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.idAssociado}</StyledTableCell>
              <StyledTableCell align="left">{row.idLivro}</StyledTableCell>
              <StyledTableCell align="left">{row.duracao}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.criacao}</StyledTableCell>
              <StyledTableCell align="left">{row.atualizacao}</StyledTableCell>
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


export default Emprestimo;