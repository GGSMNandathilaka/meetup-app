import { useRouter } from "next/router";
import MeetupItem from "./MeetupItem";

function MeetupDetail(props) {
  const { meetup } = props;

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 m-5 padding-25">
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
      />
    </div>
  );
}

export default MeetupDetail;
