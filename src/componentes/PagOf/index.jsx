import styled from "styled-components";
import styles from "./PagOf.module.css";
import { Link } from "react-router-dom";

export default function PagOf() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.artigos}>
        <Card>
          <Link
            target="_blank"
            to={"https://universe.leagueoflegends.com/pt_BR/champion/veigar/"}
          >
            <img
              src="https://i.pinimg.com/564x/38/c2/5c/38c25cf5b191435fecf0e83d3edb98f0.jpg"
              alt="foto do veigar"
            />
            <h4>História do veigar</h4>
          </Link>
        </Card>
        <Card>
          <Link
            target="_blank"
            to={"https://www.leagueoflegends.com/pt-br/champions/veigar/"}
          >
            <img src="https://i.pinimg.com/564x/e6/3c/64/e63c644cf659821777dddd3d52edcddf.jpg" />
            <h4>Veigar na pg oficial</h4>
          </Link>
        </Card>
        <Card>
          <Link
            target="_blank"
            to={"https://mobalytics.gg/lol/champions/veigar/probuilds"}
          >
            <img
              src="https://i.pinimg.com/236x/cf/d3/f2/cfd3f2338e1de44cc2a58c9159f899a4.jpg"
              alt="foto do veigar"
            />
            <h4>Probuilds Veigar</h4>
          </Link>
        </Card>
      </div>

      <div className={styles.foto}>
        <img
          src="https://i.pinimg.com/564x/55/49/b3/5549b3afc70f9a9e977e48839841f75b.jpg"
          alt="Veigar na biblioteca"
        />
      </div>
    </div>
  );
}

const Card = styled.div`
  width: 338px;
  height: 274.258px;
  flex-shrink: 0;
  background: #130d23;
  img {
    width: 338px;
    height: 211.428px;
    flex-shrink: 0;
  }
  h4 {
    color: #fff;
    font-family: Jolly Lodger;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    text-align: center;
  }
`;
