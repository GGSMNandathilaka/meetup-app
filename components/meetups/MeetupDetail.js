import MeetupItem from "./MeetupItem";

function MeetupDetail(props) {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 m-5 padding-25">
      <MeetupItem
        key={props.id}
        id={props.id}
        image={props.image}
        title={props.title}
        address={props.address}
      />
    </div>
  );
}

export default MeetupDetail;
