

function ProjectCard({title, image, desc, link}){
    return(
        <div className="card mb-3">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={link} className="btn btn-light">Visit</a>
        </div>
      </div>
    );
}

export default ProjectCard;