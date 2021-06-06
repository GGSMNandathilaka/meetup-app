import { useRouter } from "next/router";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { getMeetupById } from "../components/services/fakeMeetupsService";

function MeetupDetails() {
  const meetup = getMeetupById("m1")[0];

  return <MeetupDetail meetup={meetup} />;
}

export async function getStaticPaths() {
  return {
    fallback: true, // define all paths
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        address: "No. 471, New York, USA",
        description: "A First Meetup",
      },
    },
  };
}

export default MeetupDetails;
