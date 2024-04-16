import styles from './Infor.module.css';
import useTypingEffect from '../../hooks/use-typing-effect';

const textP = 'Oi, Sou o Leonardo';
const text = `Front-end Developer`;

function Infor() {
  const textH1 = useTypingEffect(text, 200, 1);
  const checkH1 = textH1.length !== text.length;
  const textParagEffect = useTypingEffect(textP, 200, 3);

  return (
    <section className={styles.InforContainer}>
      <div className={`animeLeft ${styles.inforWrapper}`}>
        <h1 className={styles.title}>
          {textParagEffect}
          {checkH1 && <span className={styles.blink}>|</span>}
          <br />
          {textH1}
          <span className={styles.blink}>|</span>
        </h1>
        <p>
          Estou atualmente cursando Análise de Sistemas e concentrado no estudo
          de tecnologias do ecossistema React.
        </p>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/Marshalldt1">
              <img
                src="/assets/github-icon.svg"
                alt="github logo"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/leonardo-wilson/"
            >
              <img
                src="/assets/linkedin-icon.svg"
                alt="linkeding logo"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={`animeLeft ${styles.imgWrapper}`}>
        <img src="/assets/info image.png" alt="young programming" />
      </div>
    </section>
  );
}

export default Infor;
