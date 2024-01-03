import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={styles.conteiner}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Menu nome={"HOME"} path={'/'} />
          <Menu nome={"FAVORITO"} path={'/favorito'} />
          <Menu nome={"SOBRE"} path={'sobre'}/>
        </ul>
      </nav>
      <div className={styles.apresentacao}>
        <h1 className={styles.h1}>“Eu vou devorar sua alma” <br/> ~Veigar</h1>
      </div>
    </header>
  );
};

export default Header;
