import { projectsListObj } from '../../utils/projectListObj';
import styles from './ProjectsList.module.css';
import Project from './Project';

function ProjectsList() {
  return (
    <section className={styles.containerProjects} id="sectionProjects">
      <h2 className={styles.title}>O que eu ja fiz</h2>
      <ul className={styles.projectsWrapper}>
        {projectsListObj.map(({ name, imgSrc, description, url }, ind) => (
          <Project
            key={name}
            name={name}
            srcImg={imgSrc}
            description={description}
            ind={ind}
            url={url}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsList;
