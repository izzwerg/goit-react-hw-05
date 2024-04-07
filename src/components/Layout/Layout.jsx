import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main className={css.main}>{children}</main>
    </>
  );
};

export default Layout;