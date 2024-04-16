import React from 'react';
import useIsOnscreen from '../../hooks/use-is-onscreen';
import styles from './Technologies.module.css';
import { techDataList } from '../../utils/techListObj';

function Technologies() {
  const sectionRef = React.useRef();
  const visible = useIsOnscreen(sectionRef, 0.5);

  return (
    <section
      id="sectionTechnologies"
      className={`${styles.TechnologiesWrapper}`}
      style={{ position: 'relative' }}
      ref={sectionRef}
    >
      <h2 className={styles.title}>Tecnologias</h2>

      <p className={styles.pStudy}>
        Sou um desenvolvedor atualmente focado no front-end, até o momento ja
        tive contato e venho estudando no meu tempo com projetos pessoais:
      </p>
      <ul>
        {techDataList.map((tech) => (
          <li key={tech.alt}>
            <img
              loading="lazy"
              style={tech.style}
              className={visible ? styles.technologiesAnimeSplin : ''}
              src={tech.src}
              alt={tech.alt}
            />
            <p
              style={tech.style}
              className={` ${styles.TechnologieName} ${
                visible ? styles.TechnologieNameAnime : ''
              }`}
            >
              {tech.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Technologies;
