
const Project = ({ image, title, description, link }) => {
    return (
        <div className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Посетить проект</a>
        </div>
    );
};

export default Project;