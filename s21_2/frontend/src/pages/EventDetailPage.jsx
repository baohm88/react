import React from "react";
import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const { id } = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
