/* eslint-disable react/prop-types */
const Project = ({ srcImg, name, description, url }) => {
  return (
    <li className={``}>
      <div className="imgWrapper">
        <img
          loading="lazy"
          src={`/assets/${srcImg}`}
          alt={`image of: ${description}`}
        />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <a target="_blank" href={url}>
        Ir ao site
      </a>
    </li>
  );
};

export default Project;
