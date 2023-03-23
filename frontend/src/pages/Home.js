import "./styles/Home.css";
import background from "../assets/background.png";
import styles from "../pages/styles/Home.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goCreate = () => {
    navigate("/");
  };

  return (
    <div class="container">
      <Navbar />
      <div className={styles.Homemain} class="Homemain">
        <div class="botao-div-home">
          <strong>
            Book Club
            <br />
            Management System
          </strong>
          <button type="button" class="botao-home" onClick={goCreate}>
            Logout
          </button>
        </div>
        <div class="back">
          <img className={styles.image} src={background} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
