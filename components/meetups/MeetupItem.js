function MeetupItem(props) {
  return (
    <div className="col">
      <div className="card" key={props.id}>
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.address}</p>
          <a href="#" className="btn btn-primary">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default MeetupItem;
