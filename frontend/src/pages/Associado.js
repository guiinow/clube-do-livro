import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./styles/inicial.css";
import logoEscrita from '../assets/bookClubLogo.png'
import { green } from '@mui/material/colors';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'nome', headerName: 'Nome', width: 260 },
  { field: 'telefone', headerName: 'Telefone', width: 260 },
  { field: 'email', headerName: 'Email', width: 400},
  { field: 'endereco', headerName:'Endereço', width: 600}
];

const rows = [
  { id: 1, nome: 'Snow', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 2, nome: 'Lannister', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20'  },
  { id: 3, nome: 'Lannister', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20'  },
  { id: 4, nome: 'Stark', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 5, nome: 'Targaryen', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 6, nome: 'Melisandre', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 7, nome: 'Clifford', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 8, nome: 'Frances', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
  { id: 9, nome: 'Roxie', telefone: 31958475142, email: 'bolinha@gmail.com', endereco: 'rua das tulipas, 20' },
];

function Associado(){
  return(
  <div class="Container">

  <div class="navbarContainer">

    <div class="menuContainer">
      
      <img src={logoEscrita} />

      <ul>
        <li >Associados
        </li>
        <li>Compras</li>
        <li>Empréstimo</li>
        <li>Livros</li>
        <li>Home</li>
        {/* <li>lucas</li> */}
      </ul>

     </div>

  </div>

  <div class="Main">
    <div class="tabela">
      <div style={{ height: 800, width: '100%', fontSize: 50}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
        />
      </div>
    </div>
  </div>

</div>
  );
}


export default Associado;

