import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();

  function showDetails(meetupId) {
    router.push(`/${meetupId}`);
  }

  return (
    props && (
      <div className="col">
        <div className="card" key={props.id}>
          <img src={props.image} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.address}</p>
            <button
              href="#"
              className="btn btn-primary"
              onClick={() => showDetails(props.id)}
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default MeetupItem;
