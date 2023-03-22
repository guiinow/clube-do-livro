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
import { useState, useEffect } from "react";
import { api } from '../service/api';

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


function Livros(){
  const [livros, setLivro] = useState([{
    id: "",
    title: "",
    author: "",
    publisher: "",
    description: "",
  }]);

  const navigate = useNavigate()
  
  const goCreate = () => {
    navigate('/livros/cadastro');
  }

  useEffect(() => {
    api.get("books").then(response => {
      setLivro(response.data);
    });
  }, [])

  return(
    
  <div class="Container">
    <Navbar />
  <div class="Main">
  <div class='botao-div'>
      <button type="button" class='botao' onClick={goCreate}>
        Cadastrar Livro
      </button>
    </div>
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
          {livros.map((livro) => (
            <StyledTableRow key={livro.id}>
              <StyledTableCell component="th" scope="row">
                {livro.id}
              </StyledTableCell>
              <StyledTableCell align="left">{livro.title}</StyledTableCell>
              <StyledTableCell align="left">{livro.author}</StyledTableCell>
              <StyledTableCell align="left">{livro.publisher}</StyledTableCell>
              <StyledTableCell align="left">{livro.description}</StyledTableCell>
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