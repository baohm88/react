import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <MainNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
