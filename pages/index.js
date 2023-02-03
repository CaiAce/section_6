import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
import Head from "next/head";

function HomePage(props) {

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Meta description tag!!" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();


  return { props: {events: featuredEvents}, revalidate: 600 };
}

export default HomePage;
