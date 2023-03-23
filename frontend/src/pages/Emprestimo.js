import * as React from "react";
import "./styles/inicial.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { createTheme, styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { api } from "../service/api";


const tema = createTheme({
  palette: {
    primary: {
      main: "#221f28",
      light: "#eae8ed",
    },
    secondary: {
      main: "#fff",
      dark: "#000",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
  "&:nth-of-type(odd)": {
    backgroundColor: tema.palette.primary.light,
    // theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Emprestimo() {
  const [emprestimo, setEmprestimo] = useState([
    {
      id: "",
      associateid: "",
      bookid: "",
      duration: "",
      status: "",
      createat: "",
      updateat: "",
    },
  ]);

  const navigate = useNavigate();
  const goCreate = () => {
    navigate("/emprestimo/cadastro");
  };

  useEffect(() => {
    api.get("loan").then((response) => {
      setEmprestimo(response.data);
    });
  }, []);

  // function DateFormat(data) {
  //   return ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()
  // }


  return (
    <div class="Container">
      <Navbar />
      <div class="Main">
        <div class="botao-div">
          <button type="button" class="botao" onClick={goCreate}>
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
                {emprestimo.map((emprestar) => (
                  <StyledTableRow key={emprestar.id}>
                    <StyledTableCell component="th" scope="row">
                      {emprestar.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.associateid}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.bookid}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.duration}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.status}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.createat}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {emprestar.updateat}
                    </StyledTableCell>
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
