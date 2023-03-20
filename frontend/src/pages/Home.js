import "./styles/inicial.css";
import logoEscrita from '../assets/bookClubLogo.png'
import background from '../assets/background.png'
import styles from '../pages/styles/Home.css'
import Navbar from "../components/Navbar";

function Home(){
return(
    
    <div class="container">
        <Navbar />
        <div className={styles.Homemain} class="Homemain">
            <div class="back">
                <img className={styles.image} src={background} alt="" />
                </div>
        </div>
    </div>
)
}

export default Home