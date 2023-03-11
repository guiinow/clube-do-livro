import {Link} from 'react-router-dom'
import logoEscrita from '../assets/bookClubLogo.png'
import styles from '../pages/styles/inicial.css'

function Navbar(){
    return(

<div class="container">
    <div class="navbarContainer">
    
        <div class="menuContainer">
    
          <img src={logoEscrita} />
    
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className="Links" to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Associado">Associado</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Livros">Livros</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Emprestimos">Emprestimos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Compras">Compras</Link>
            </li>
          </ul>
    
         </div>
    
      </div>
</div>

    )
}

export default Navbar


    //     <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/Associado">Associado</Link>
    //     </li>
    //     <li>
    //       <Link to="/Livros">Livros</Link>
    //     </li>
    //     <li>
    //       <Link to="/Emprestimos">Emprestimos</Link>
    //     </li>
    //     <li>
    //       <Link to="/Compras">Compras</Link>
    //     </li>
    //   </ul>