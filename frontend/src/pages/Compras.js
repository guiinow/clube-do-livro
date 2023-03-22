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

function Compras() {
  const [compra, setCompra] = useState([
    {
      id: "",
      price: "",
      date: "",
    },
  ]);

  const navigate = useNavigate();

  const goCreate = () => {
    navigate("/compras/cadastro");
  };

  useEffect(() => {
    api.get("buy").then((response) => {
      setCompra(response.data.rows);
    });
  }, []);

  console.log(compra)

  return (
    <div class="Container">
      <Navbar />
      <div class="Main">
        <div class="botao-div">
          <button type="button" class="botao" onClick={goCreate}>
            Cadastrar Compra
          </button>
        </div>
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
                {compra.map((comprar) => (
                  <StyledTableRow key={comprar.id}>
                    <StyledTableCell component="th" scope="row">
                      {comprar.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {comprar.price}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {comprar.date}
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

export default Compras;
