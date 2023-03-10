import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./styles/inicial.css";
import MaterialTable from 'material-table';
import logoEscrita from '../assets/bookClubLogo.png'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'nome', headerName: 'Nome', width: 260 },
  { field: 'telefone', headerName: 'Telefone', width: 260 },
  { field: 'email', headerName: 'Email', width: 400},
  { field: 'endereco', headerName:'Endereço', width: 600}
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  </div>

</div>
  );
}


export default Associado;

