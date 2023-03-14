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

function createData(id, nome, telefone, email, endereco) {
  return { id, nome, telefone, email, endereco };
}


const rows = [
   createData(1, 'Teste1', 31958475142, 'teste1@gmail.com', 'rua das tulipas, 20') ,
   createData(2, 'Teste2', 31958475142, 'teste2@gmail.com', 'rua das tulipas, 20') ,
   createData(3, 'Teste3', 31958475142, 'teste3@gmail.com', 'rua das tulipas, 20') ,
   createData(4, 'Teste4', 31958475142, 'teste4@gmail.com', 'rua das tulipas, 20') ,
   createData(5, 'Teste5', 31958475142, 'teste5@gmail.com', 'rua das tulipas, 20') ,
   createData(6, 'Teste6', 31958475142, 'teste6@gmail.com', 'rua das tulipas, 20') ,
   createData(7, 'Teste7', 31958475142, 'teste7@gmail.com', 'rua das tulipas, 20') ,
   createData(8, 'Teste8', 31958475142, 'teste8@gmail.com', 'rua das tulipas, 20') ,
   createData(9, 'Teste9', 31958475142, 'teste9@gmail.com', 'rua das tulipas, 20') ,
 
];

function Associado(){
  const navigate = useNavigate()
  
  const goCreate = () => {
    navigate('/associado/Cadastro');
  }

  return(
  <div class="Container">
  <div class="Main">
    <div class='botao-div'>
      <button type="button" class='botao' onClick={goCreate}>
        Cadastrar Associado
      </button>
    </div>
    <div class="tabela">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">NOME</StyledTableCell>
            <StyledTableCell align="left">TELEFONE</StyledTableCell>
            <StyledTableCell align="left">EMAIL</StyledTableCell>
            <StyledTableCell align="left">ENDEREÇO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.nome}</StyledTableCell>
              <StyledTableCell align="left">{row.telefone}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.endereco}</StyledTableCell>
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


export default Associado;