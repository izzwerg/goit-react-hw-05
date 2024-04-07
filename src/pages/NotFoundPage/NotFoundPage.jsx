import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={css.div}>
      <p className={css.p}>Error 404: Page not found</p>
      <button className={css.button} type="button">
        <Link className={css.link} to="/">Back to home page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;