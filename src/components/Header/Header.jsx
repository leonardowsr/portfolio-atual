import styles from './Header.module.css';
import { useScroll } from '../../hooks/use-scroll';

function Header() {
  const visible = useScroll();

  return (
    visible && (
      <header className={`${styles.header}`}>
        <nav className={styles.nav}>
          <h2 className={`animeLeft ${styles.title}`}>Leonardo</h2>
          <ul className="animeLeft">
            <li>
              <a href="#sectionProjects">Projetos</a>
            </li>
            <li>
              <a href="#sectionTechnologies">Tecnologias</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
}

export default Header;
