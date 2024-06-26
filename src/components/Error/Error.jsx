import css from "./Error.module.css";

const Error = () => {
  return (
    <div className={css.div}>
      <p>Whoops, something went wrong! Please try reloading this page!</p>
    </div>
  );
};

export default Error;