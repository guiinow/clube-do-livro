import "./styles/inicial.css";
import logoEscrita from '../assets/bookClubLogo.png'
import background from '../assets/background.png'
import styles from '../pages/styles/Home.css'

function Home(){
return(

    <div className={styles.Homemain} class="Homemain">
        <div class="back">
            <img className={styles.image} src={background} alt="" />
            </div>
    </div>
)
}

export default Home