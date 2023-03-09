import "./styles/inicial.css";
import {Table, Button} from 'rsuite';

const {Column, HeaderCall} = Table

function Associado(){
return (
<div class="Container">

  <div class="navbarContainer">

    <div class="menuContainer">
      
      <img src="https://img.freepik.com/vetores-gratis/livro-azul-aberto-em-branco_1308-69339.jpg?w=360" alt="" />

      <ul>
        <li>Associados</li>
        <li>Compras</li>
        <li>Emprestimo</li>
        <li>Livros</li>
        <li>Home</li>
      </ul>

    </div>

  </div>

  <div class="Main">
  <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={150}>
        <HeaderCell>Postcode</HeaderCell>
        <Cell dataKey="postcode" />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>
      </Column>
    </Table>

  </div>

</div>



);
}

export default Associado;
