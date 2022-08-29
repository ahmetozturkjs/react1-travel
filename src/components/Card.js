function Card(props){
    return(
        
        <div className="card mb-3 border" style={{maxwidth:"451px"}}>
        <div className="row g-0">
          <div className="col-md-4 col">
            <img src={props.img} className="img-fluid rounded-start"  alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="adiv d-flex"><span><i className="fa-solid fa-location-pin"></i><span className="mx-3">{props.placeName}</span></span><a className="a xs-auto" href={props.placeMap}>Viev on Google Maps</a></div>
              <h5 className="card-title">{props.title}</h5>
              <p>{props.date}</p>
              <p className="card-text">{props.description}</p>              
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Card;