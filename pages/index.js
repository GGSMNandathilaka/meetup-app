import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { getMeetups } from "../components/services/fakeMeetupsService";

const DUMMY_MEETUPS = getMeetups();

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   // never execute in the client-side
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
