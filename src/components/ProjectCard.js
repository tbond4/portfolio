

function ProjectCard({title, image, desc, link}){
    return(
    <div className="card mb-3 " style={{width:"800px"}}>
        <img src={image} className="card-img-top " alt="..." style={{height:"400px",width:"800px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={link} className="btn btn-dark">Visit</a>
        </div>
      </div>

    );
}

export default ProjectCard;