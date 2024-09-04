import React from "react";
import MainNav from "../components/MainNav";

export default function ErrorPage() {
  return (
    <>
      <MainNav />
      <main>
        <h1>An eror occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
