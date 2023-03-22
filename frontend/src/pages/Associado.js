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
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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

function Associado() {
  const [usuarios, setUsuario] = useState([
    {
      id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  ]);

  const navigate = useNavigate();

  const goCreate = () => {
    navigate("/associado/Cadastro");
  };

  useEffect(() => {
    api.get("associate").then((response) => {
      setUsuario(response.data);
    });
  }, []);

  console.log(usuarios)

  return (
    <div class="Container">
      <Navbar />
      <div class="Main">
        <div class="botao-div">
          <button type="button" class="botao" onClick={goCreate}>
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
                {usuarios.map((usuario) => {
                  return (
                    <StyledTableRow key={usuario.id}>
                      <StyledTableCell component="th" scope="row">
                        {usuario.id}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {usuario.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {usuario.phone}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {usuario.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {usuario.address}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Associado;
